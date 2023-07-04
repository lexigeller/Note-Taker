const path = require('path');
const router = require('express').Router();

// GET request to return the 'notes.html' file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html')); 
  });
  
  // GET request to return the 'index.html' file for all other routes
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });