/*const router = require('express').Router();
const notes = require('../db')

router.use(notes);

module.exports = router;*/

// GET request to retrieve all notes
app.get('/api/notes', (req, res) => {
    // Read the 'db.json' file and send the parsed JSON as the response
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));
    res.json(notes);
  });
  
  // POST request to add a new note
  app.post('/api/notes', (req, res) => {
    // Read the 'db.json' file to get the existing notes
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8'));
  
    // Generate a unique id for the new note
    const newNote = req.body;
    newNote.id = Date.now();
  
    // Add the new note to the existing notes
    notes.push(newNote);
  
    // Write the updated notes to the 'db.json' file
    fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(notes));
  
    // Send the new note as the response
    res.json(newNote);
  });