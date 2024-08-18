const express = require('express');
const { categorizeText } = require('../utils/categorizeText');

const router = express.Router();

router.post('/categorize', async (req, res) => {
  const { text } = req.body;

  try {
    const categoryIndex = await categorizeText(text);
    res.json({ category: categoryIndex });
  } catch (error) {
    res.status(500).send('Error categorizing text');
  }
});

module.exports = router;