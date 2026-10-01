const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const FILE_LOC = path.join(__dirname, 'courses.json');

function loadData() {
    try {
        const raw = fs.readFileSync(FILE_LOC, 'utf8');
        const data = JSON.parse(raw);

        return {
            courseInfo: Array.isArray(data.courseInfo) ? data.courseInfo : []
        };
    } catch {
        return { courseInfo: [] };
    }
}

function saveData(data) {
    const tmp = `${FILE_LOC}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(data, null, 4));
    fs.renameSync(tmp, FILE_LOC);
}

const app = express();

app.use(express.json());

// Handle CORS headers and OPTIONS preflight requests for all /api endpoints
app.use('/api', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, OPTIONS'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// ============================================================
// GET
// Retrieve courses
// ============================================================

app.get('/api', (req, res) => {
    res.status(200).json(loadData());
});

// ============================================================
// POST
// Create a new course
// ============================================================

app.post('/api', (req, res) => {
    const payload = req.body || {};
    const data = loadData();

    const code = String(payload.code ?? '').trim().toLowerCase();
    const name = String(payload.name ?? '').trim();
    const description = String(payload.description ?? '').trim();
    const coreForIS = payload.coreForIS === "true" || payload.coreForIS === true;
    const coreForSE = payload.coreForSE === "true" || payload.coreForSE === true;
    const coreForCS = payload.coreForCS === "true" || payload.coreForCS === true;
    const coreForCL = payload.coreForCL === "true" || payload.coreForCL === true;

    if (code === '' || name === '' || description === '') {
        res.status(400).json({ message: 'Missing code, name or description.' });
        return;
    }

    const newCourse = {
        code,
        name,
        description,
        coreForIS,
        coreForSE,
        coreForCS,
        coreForCL
    };

    // cannot have duplicate course code
    if (data.courseInfo.some(c => c.code.toLowerCase() === code)) {
        res.status(409).json({ message: 'Course code already exists.' });
        return;
    }

    // insert into courseInfo
    data.courseInfo.push(newCourse);
    saveData(data);

    res.status(200).json({
        message: 'Course created.',
        item: newCourse
    });
});

// ============================================================
// PUT
// Update a course
// ============================================================

app.put('/api/:id', (req, res) => {
    const code = String(req.params.id).toLowerCase();
    const payload = req.body || {};

    const data = loadData();
    const existingCourse = data.courseInfo.find(item => item.code.toLowerCase() === code);

    if (!existingCourse) {
        res.status(404).json({ message: 'Course code not found.' });
        return;
    }

    if (payload.name !== undefined) {
        const name = String(payload.name).trim();
        if (name === '') {
            res.status(400).json({ message: 'Course name cannot be empty.' });
            return;
        }
        existingCourse.name = name;
    }

    if (payload.description !== undefined) {
        const description = String(payload.description).trim();
        if (description === '') {
            res.status(400).json({ message: 'Description cannot be empty.' });
            return;
        }
        existingCourse.description = description;
    }

    if (payload.coreForIS !== undefined) {
        existingCourse.coreForIS = payload.coreForIS === "true" || payload.coreForIS === true;
    }

    if (payload.coreForSE !== undefined) {
        existingCourse.coreForSE = payload.coreForSE === "true" || payload.coreForSE === true;
    }

    if (payload.coreForCS !== undefined) {
        existingCourse.coreForCS = payload.coreForCS === "true" || payload.coreForCS === true;
    }

    if (payload.coreForCL !== undefined) {
        existingCourse.coreForCL = payload.coreForCL === "true" || payload.coreForCL === true;
    }

    saveData(data);

    res.status(200).json({
        message: 'Course updated.',
        item: existingCourse
    });
});

// ============================================================
// DELETE
// Remove a course
// ============================================================

app.delete('/api/:id', (req, res) => {
    const code = String(req.params.id).toLowerCase();

    if (code === '') {
        res.status(400).json({ message: 'Missing course code.' });
        return;
    }

    const data = loadData();

    const index = data.courseInfo.findIndex(
        entry => entry.code.toLowerCase() === code
    );
    if (index === -1) {
        res.status(404).json({ message: 'Course not found.' });
        return;
    }
    const [removedItem] = data.courseInfo.splice(index, 1);

    saveData(data);

    res.status(200).json({
        message: 'Course removed.',
        item: removedItem
    });
});

app.use((req, res) => {
    res.status(404).type('text/plain').send('Not found');
});

app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});