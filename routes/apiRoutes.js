const router = require('express').Router();
const notesStore = require('../db/db.json')

module.exports = router;

// GET request to retrieve all notes
router.get('/notes', (req, res) => {
    notesStore
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})
  
  // POST request to add a new note
  router.post('/notes', (req, res) => {
        console.log(req.body)
        notesStore
            .addNote(req.body)
            .then(note => {
                res.json(note)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    })
  
    // Generate a unique id for the new note
    const newNote = req.body;
    newNote.id = Date.now();
  
    // Add the new note to the existing notes
    notes.push(newNote);
  
    // Write the updated notes to the 'db.json' file
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes));
  
    // Send the new note as the response
    res.json(newNote);

    // DELETE request to delete a note by id
app.delete('/api/notes/:id', (req, res) => {
    // Read the 'db.json' file to get the existing notes
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));
  
    // Find the index of the note with the given id
    const noteIndex = notes.findIndex((note) => note.id === parseInt(req.params.id));
  
    if (noteIndex !== -1) {
      // Remove the note from the notes array
      const deletedNote = notes.splice(noteIndex, 1)[0];
  
      // Write the updated notes to the 'db.json' file
      fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes));
  
      // Send the deleted note as the response
      res.json(deletedNote);
    } else {
      // If the note with the given id is not found, send a 404 status code
      res.status(404).json({ error: 'Note not found' });
    }
  });