const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();
const notesStore = require('../db/db.json');

// GET request to retrieve all notes
router.get('/notes', (req, res) => {
  res.json(notesStore);
});

// POST request to add a new note
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = notesStore.length + 1;
  notesStore.push(newNote);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesStore)
  );

  res.json(newNote);
});

// DELETE request to delete a note by id
router.delete('/notes/:id', (req, res) => {
  const noteId = parseInt(req.params.id);
  const filteredNotes = notesStore.filter((note) => note.id !== noteId);

  if (filteredNotes.length < notesStore.length) {
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(filteredNotes)
    );

    res.json({ success: true });
  } else {
    res.status(404).json({ error: 'Note not found' });
  }
});

module.exports = router;
