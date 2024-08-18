const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');  // For TensorFlow.js support in Node.js

function createModel() {
  const model = tf.sequential();
  model.add(tf.layers.dense({
    units: 64,
    activation: 'relu',
    inputShape: [inputSize],  // Replace `inputSize` with the size of your input features
  }));
  model.add(tf.layers.dense({
    units: numClasses,  // Replace `numClasses` with the number of categories
    activation: 'softmax',
  }));

  model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  return model;
}

async function trainModel(model, trainData, trainLabels) {
  // Convert data to tensors
  const xs = tf.tensor2d(trainData);
  const ys = tf.tensor2d(trainLabels);

  // Train the model
  await model.fit(xs, ys, {
    epochs: 10,  // Number of training epochs
    batchSize: 32,
    validationSplit: 0.2,  // Validation split for monitoring during training
  });
}

module.exports = { createModel, trainModel };