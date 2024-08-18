const tf = require('@tensorflow/tfjs-node');
const path = require('path');

let model;

async function loadModel() {
  if (!model) {
    try {
      // Update the path to reflect the model location
      const modelPath = path.join(__dirname, '../my-model/model.json');
      console.log('Loading model from:', modelPath);
      model = await tf.loadLayersModel(`file://${modelPath}`);
      console.log('Model loaded successfully');
    } catch (error) {
      console.error('Error loading model:', error);
      throw new Error('Failed to load model');
    }
  }
  return model;
}

async function categorizeText(text) {
  try {
    const model = await loadModel();
    
    // Preprocess text into tensor format
    const processedText = preprocessText(text);
    
    // Ensure tensor shape is correct
    const inputTensor = tf.tensor2d([processedText], [1, processedText.length]); // Example shape [1, N]
    
    // Make prediction
    const prediction = model.predict(inputTensor);
    const categoryIndex = prediction.argMax(1).dataSync()[0]; // Get the index of the highest probability
    
    return categoryIndex;
  } catch (error) {
    console.error('Error in categorizeText:', error);
    throw new Error('Error categorizing text');
  }
}

function preprocessText(text) {
  // Example preprocessing: Convert text to numerical data
  // Adjust based on your model's input requirements (e.g., tokenization, padding)
  return text.split('').map(char => char.charCodeAt(0));
}

module.exports = { categorizeText };