const express = require('express');
const router = express.Router();
router.get('/books', (req,res) => {
    res.json({ books: [] });
})

    .post('/books', (req, res) => {
        res.json({ books: [2] });
})

module.exports = { router };