const tf = require('@tensorflow/tfjs-node');
const path = require('path');

async function loadModel() {
  try {
    const modelPath = path.join(__dirname, '../model/model.json');
    const model = await tf.loadLayersModel(`file://${modelPath}`);
    console.log('Model loaded successfully!');
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
  }
}

loadModel();