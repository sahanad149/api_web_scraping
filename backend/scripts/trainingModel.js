const tf = require('@tensorflow/tfjs-node');
const path = require('path');

// Define input dimension
const inputDim = 10;  // Adjust as necessary

async function createAndTrainModel() {
  // Create model
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [inputDim] }));
  model.add(tf.layers.dense({ units: 10, activation: 'softmax' }));

  model.compile({ optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy'] });

  // Example data (Replace with actual data)
  const xTrain = tf.tensor2d([[0.1, 0.5, 0.3, 0.8, 0.2, 0.7, 0.9, 0.4, 0.6, 0.1],
    [0.4, 0.2, 0.7, 0.5, 0.9, 0.3, 0.6, 0.8, 0.2, 0.4],]);  // Replace with actual training data
  const yTrain = tf.tensor2d([[1, 0, 0],  // One-hot encoded labels
    [0, 1, 0],]);  // Replace with actual labels

  await model.fit(xTrain, yTrain, { epochs: 10 });

  // Save model
  const modelPath = path.join(__dirname, '../model');
  await model.save(`file://${modelPath}`);
  console.log('Model saved successfully!');
}

createAndTrainModel();
