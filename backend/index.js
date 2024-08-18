const express = require('express');
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');
const ScrapedData = require('./models/ScrapedData'); // Import your MongoDB model

const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();  // Initialize app here

const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

console.log(process.env.MONGO_URI);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
const scrapeRoutes = require('./routes/scrapeRoutes');
app.use('/api', scrapeRoutes);  // Now you can use app

// Basic Route
app.get('/', (req, res) => {
  res.send('Web Scraping API is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.post('/scrape', async (req, res) => {
    const { url } = req.body; // Extract URL from the request body
  
    try {
      // Launch a new browser instance
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      
      // Navigate to the provided URL
      await page.goto(url, { waitUntil: 'networkidle2' }); // Wait until the network is idle
  
      // Scrape data from the page
      const data = await page.evaluate(() => {
        // Extract text content from the body or other selectors as needed
        return {
          title: document.title,
          content: document.body.innerText,
        };
      });
  
      // Close the browser instance
      await browser.close();
  
      // Save scraped data to MongoDB
      const scrapedData = new ScrapedData({ url, data, category: 'Uncategorized' });
      await scrapedData.save();
  
      // Respond with the saved data
      res.json(scrapedData);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred during scraping' });
    }
  });  