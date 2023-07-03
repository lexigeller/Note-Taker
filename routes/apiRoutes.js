const router = require('express').Router();
const notes = require('../db')

router.use(notes);

module.exports = router;