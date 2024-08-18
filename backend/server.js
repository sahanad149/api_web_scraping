const express = require('express');
const app = express();
const categorizeRoutes = require('./routes/categorizeRoutes');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the categorize routes
app.use('/', categorizeRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});