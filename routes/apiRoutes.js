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
    const newNote = {
      id: Date.now(),
      title: req.body.title,
      text: req.body.text
    };
  
    notesStore.push(newNote); // Add the new note to the notesStore array
  
    fs.writeFile(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesStore),
      (err) => {
        if (err) {
          res.status(500).json(err);
        } else {
          res.json(newNote);
        }
      }
    );
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
