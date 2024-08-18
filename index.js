const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();  // Initialize app here

const PORT = process.env.PORT || 5001;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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