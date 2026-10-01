const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const FILE_LOC = path.join(__dirname, 'requests.json');

// Load requests (array) from file; initialize if missing or invalid
function loadRequests() {
    if (!fs.existsSync(FILE_LOC)) {
        fs.writeFileSync(FILE_LOC, JSON.stringify([], null, 4));
        return [];
    }
    try {
        const raw = fs.readFileSync(FILE_LOC, 'utf8');
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data : [];
    } catch {
        return [];
    }
}

// Derive the list of known slots from the requests on file (unique, sorted)
function loadSlots(requests) {
    const slots = new Set(requests.map(r => String(r.slot ?? '').trim()).filter(Boolean));
    return Array.from(slots).sort();
}

// Save requests (array) to file (atomic-ish)
function saveRequests(requests) {
    const tmp = `${FILE_LOC}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(requests, null, 4));
    fs.renameSync(tmp, FILE_LOC);
}

function nextId(requests) {
    if (!requests.length) return 1;
    let max = 0;
    for (const r of requests) {
        const id = Number.isFinite(Number(r.id)) ? parseInt(r.id, 10) : 0;
        if (id > max) max = id;
    }
    return max + 1;
}

function readBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('data', chunk => { data += chunk; });
        req.on('end', () => resolve(data));
        req.on('error', reject);
    });
}

const app = express();

app.use('/api', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.options('/api', (req, res) => {
    res.sendStatus(200);
});

app.get('/api', (req, res) => {
    const requests = loadRequests();
    res.status(200).json({ slots: loadSlots(requests), requests });
});

app.post('/api', (req, res) => {
    readBody(req).then(raw => {
        let payload;
        try {
            payload = JSON.parse(raw);
            if (typeof payload !== 'object' || payload === null || Array.isArray(payload)) payload = {};
        } catch {
            payload = {};
        }

        const action = payload.action || '';

        if (action === 'create') {
            const name = String(payload.name ?? '').trim();
            const slot = String(payload.slot ?? '').trim();

            if (name === '' || slot === '') {
                res.status(400).json({ message: 'Missing name or slot.' });
                return;
            }

            const requests = loadRequests();
            if (!loadSlots(requests).includes(slot)) {
                res.status(400).json({ message: 'Invalid slot.' });
                return;
            }

            const newRequest = {
                id: nextId(requests),
                name,
                slot,
                status: 'pending'
            };
            requests.unshift(newRequest);
            saveRequests(requests);

            res.status(200).json({ message: `Request created for ${name}.`, request: newRequest });
            return;
        }

        if (action === 'update') {
            const id = Number.isFinite(Number(payload.id)) ? parseInt(payload.id, 10) : 0;
            const status = String(payload.status ?? '');
            const allowed = ['pending', 'approved', 'denied'];

            if (id <= 0 || !allowed.includes(status)) {
                res.status(400).json({ message: 'Invalid id or status.' });
                return;
            }

            const requests = loadRequests();
            const idx = requests.findIndex(r => Number(r.id) === id);
            if (idx === -1) {
                res.status(400).json({ message: 'Request not found.' });
                return;
            }

            requests[idx].status = status;
            saveRequests(requests);

            res.status(200).json({ message: `Status updated to ${status}.`, request: requests[idx] });
            return;
        }

        res.status(400).json({ message: 'Invalid action.' });
    }).catch(() => {
        res.status(400).json({ message: 'Invalid request body.' });
    });
});

app.all('/api', (req, res) => {
    res.status(405).json({ message: 'Method not allowed.' });
});

app.use(express.static(__dirname, { index: 'q4.html' }));

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
