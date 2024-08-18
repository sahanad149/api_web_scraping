const express = require('express');
const bodyParser = require('body-parser');
const categorizeRoute = require('./routes/categorizeRoute');

const app = express();
const port = 5001;

app.use(bodyParser.json());
app.use('/api', categorizeRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});