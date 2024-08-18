const puppeteer = require('puppeteer');
const ScrapedData = require('../models/ScrapedData');

exports.scrapeAndSave = async (req, res) => {
  const { url } = req.body;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Scraping logic
    const data = await page.evaluate(() => {
      return document.querySelector('body').innerText;
    });

    await browser.close();

    // Save to MongoDB
    const scrapedData = new ScrapedData({ url, data });
    await scrapedData.save();

    res.json(scrapedData);
  } catch (error) {
    console.error('Error scraping data:', error);
    res.status(500).json({ error: 'Failed to scrape data' });
  }
};