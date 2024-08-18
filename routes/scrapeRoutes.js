const express = require('express');
const { scrapeAndSave } = require('../controllers/scrapeController');
const router = express.Router();

// POST route to scrape and save data
router.post('/scrape', scrapeAndSave);

module.exports = router;