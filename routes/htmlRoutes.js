// Import required items
const router = require('express').Router();
const path = require('path');

// Route when get request is sent (html)
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Route when get request is sent (notes)
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;