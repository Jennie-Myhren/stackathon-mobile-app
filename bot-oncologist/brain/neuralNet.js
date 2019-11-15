const { NeuralNetwork } = require('brain.js');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const minMaxByField = require('./minMaxByField'); //arr of objects: {field {min, max}}
const tallyAccuracy = require('./tallyAccuracy');

//NORMALIZING AND FORMATTING DATA
//get raw data (array of strings)
const rawData = fs
  .readFileSync(path.resolve(__dirname, '../data/dataset.csv'), 'utf8')
  .split('\n');

//extract headers to use as input/output labels
const headers = rawData[0]
  .split(',')
  .map(header => header.replace(/["']/g, ''));

let sampleSize = rawData.length; //(n = 569)

//Normalize and format data ([{input: {label: value}, {output: {label: value}}]
const allData = rawData.slice(1, sampleSize).map(row => {
  return row.split(',').reduce((dataObj, dataVal, index) => {
    let header = headers[index];

    if (header === 'diagnosis') {
      //Diagnosis data normalized as 0 (benign[B]) or 1 (malignant[M])
      dataVal = dataVal === 'M' ? 1 : 0;
    } else if (header !== 'id') {
      //Other data normalized with |(value - min)| / range for # btwn 0 and 1
      if (minMaxByField.hasOwnProperty(header)) {
        let min = minMaxByField[header].min;
        let max = minMaxByField[header].max;
        let range = max - min;
        let distanceFromMin = Math.abs(dataVal - min);
        let normalizedToDecimal = Number.parseFloat(
          distanceFromMin / range
        ).toPrecision(4);
        dataVal = normalizedToDecimal;
      }
    }
    //set label for data point
    dataObj[header] = dataVal;
    return dataObj;
  }, {});
});

//separate train and test data
let midPoint = Math.ceil(sampleSize / 2);
let trainData = allData.slice(0, midPoint); //confirmed matches train.csv (n = 285)
let testData = allData.slice(midPoint); //confirmed matches test.csv (n = 284)

//select all fields but id & Dx for input; output = Dx (NOTE: _.omit slower than _.pick)
const cleanTrainData = trainData.map(row => ({
  input: _.omit(row, ['id', 'diagnosis']),
  output: _.pick(row, ['diagnosis']),
}));

const cleanTestData = testData.map(row => ({
  input: _.omit(row, ['id', 'diagnosis']),
  output: _.pick(row, ['diagnosis']),
}));

//NOTE TO SELF FOR LATER: Consider shuffling training data

//NEURAL NETWORK CONFIG
//set network configuration options
const config = {
  activiation: 'sigmoid',
  // hiddenLayers: [4],
  iterations: 20000,
  learningRate: 0.5,
};

//initialize simple feed-forward neural network
const net = new NeuralNetwork(config);

//log error + iterations post-training
console.log('Artificial brain done training!', net.train(cleanTrainData));

const trainedBrain = net;

//calculate accuracy after net runs on test data
const accuracy = tallyAccuracy(net, cleanTestData);
console.log('TCL: accuracy', accuracy);

module.exports = trainedBrain;
