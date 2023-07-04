const express = require('express');
const path = require('path');

const router = express.Router();

// GET request to return the 'notes.html' file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// GET request to return the 'index.html' file for all other routes
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
