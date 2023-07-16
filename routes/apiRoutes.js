// Import required items
const router = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require ("fs");

// Get request to api/notes endpoint
router.get('/api/notes', async (req, res) => {
    const dataJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
    res.json(dataJson);
});

// Post request to api/notes endpoint
router.post('/api/notes', (req, res) => {
    const dataJson = JSON.parse(fs.readFileSync("db/db.json","utf8"));
    const newFeedback = {
        title: req.body.title,
        text: req.body.text,
        id: uuid(),
    };
    dataJson.push(newFeedback);
    fs.writeFileSync("db/db.json",JSON.stringify(dataJson));
    res.json(dataJson);
});

module.exports = router;