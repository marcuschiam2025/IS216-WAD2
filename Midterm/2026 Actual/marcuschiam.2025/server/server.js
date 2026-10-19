const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const FILE_LOC = path.join(__dirname, 'equipment.json');

function loadData() {
    try {
        const raw = fs.readFileSync(FILE_LOC, 'utf8');
        const data = JSON.parse(raw);

        return {
            rooms: Array.isArray(data.rooms) ? data.rooms : [],
            equipment: Array.isArray(data.equipment) ? data.equipment : []
        };
    } catch {
        return { rooms: [], equipment: [] };
    }
}

function saveData(data) {
    const tmp = `${FILE_LOC}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(data, null, 4));
    fs.renameSync(tmp, FILE_LOC);
}

function nextId(equipment) {
    let max = 0;

    for (const item of equipment) {
        const id = Number(item.id);

        if (Number.isFinite(id) && id > max) {
            max = id;
        }
    }

    return max + 1;
}

const app = express();

app.use(cors());
app.use(express.json());


// ============================================================
// GET
// Retrieve rooms and equipment
// ============================================================

app.get('/api', (req, res) => {
    res.status(200).json(loadData());
});


// ============================================================
// POST
// Create a new facility/equipment item
// ============================================================

app.post('/api', (req, res) => {
    const payload = req.body || {};
    const data = loadData();

    const name = String(payload.name ?? '').trim();
    const room = String(payload.room ?? '').trim();

    if (name === '' || room === '') {
        res.status(400).json({ message: 'Missing name or room.' });
        return;
    }

    const newItem = {
        id: nextId(data.equipment),
        name,
        room,
        status: 'Pending'
    };

    // Deliberately no duplicate-name validation.
    data.equipment.push(newItem);
    saveData(data);

    res.status(200).json({
        message: 'Item created.',
        item: newItem
    });
});


// ============================================================
// PUT
// Update the status of an equipment item
// ============================================================

app.put('/api/:id', (req, res) => {
    const id = Number(req.params.id);
    const payload = req.body || {};
    const status = String(payload.status ?? '');

    if (!Number.isFinite(id) || status === '') {
        res.status(400).json({ message: 'Invalid id or status.' });
        return;
    }

    const data = loadData();

    const item = data.equipment.find(
        entry => Number(entry.id) === id
    );

    if (!item) {
        res.status(404).json({ message: 'Item not found.' });
        return;
    }

    item.status = status;
    saveData(data);

    res.status(200).json({
        message: 'Status updated.',
        item
    });
});


// ============================================================
// DELETE
// Remove an equipment item
// ============================================================

app.delete('/api/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isFinite(id)) {
        res.status(400).json({ message: 'Invalid id.' });
        return;
    }

    const data = loadData();

    const index = data.equipment.findIndex(
        entry => Number(entry.id) === id
    );

    if (index === -1) {
        res.status(404).json({ message: 'Item not found.' });
        return;
    }

    // Deliberately no status-based deletion restriction.
    const [removedItem] = data.equipment.splice(index, 1);
    saveData(data);

    res.status(200).json({
        message: 'Item removed.',
        item: removedItem
    });
});


// ============================================================
// Invalid API method
// ============================================================

app.all('/api/{*splat}', (req, res) => {
    res.status(405).json({ message: 'Method not allowed.' });
});

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not found');
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});