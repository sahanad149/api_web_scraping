const express = require('express');
const router = express.Router();

// Sample controller function
const categorizeController = (req, res) => {
    // This is where you would normally scrape the URL and categorize the content.
    const url = req.body.url;
    const data = {
        title: "Example Domain",
        content: "Example Domain\n\nThis domain is for use in illustrative examples in documents..."
    };
    const category = "Uncategorized";

    // Respond with the JSON object
    res.json({
        url,
        data,
        category,
        _id: "66c18e4e4c450bc30188de27",
        scrapedAt: new Date().toISOString(),
        __v: 0
    });
};

// Define the POST route
router.post('/categorize', categorizeController);

module.exports = router;