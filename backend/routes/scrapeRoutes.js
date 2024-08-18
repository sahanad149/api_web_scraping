const express = require('express');
const { scrapeData } = require('../controllers/scrapeController');

const router = express.Router();

// Define the POST route for scraping
router.post('/', scrapeData);

module.exports = router;