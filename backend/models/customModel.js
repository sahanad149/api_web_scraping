const express = require('express');
const tf = require('@tensorflow/tfjs');

const app = express();
app.use(express.json());

app.post('/categorize', async (req, res) => {
  const { text } = req.body;

  // Create a dummy model
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

  // Use the model to make a prediction
  const category = model.predict(tf.tensor([text.length])).dataSync();

  // Categorize the result as 'Positive' or 'Negative'
  res.json({ category: category > 0.5 ? 'Positive' : 'Negative' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});