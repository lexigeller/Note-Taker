// Import necessary modules
const express = require('express');
const fs = require('fs');
const path = require('path');

// Create an instance of Express.js
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));