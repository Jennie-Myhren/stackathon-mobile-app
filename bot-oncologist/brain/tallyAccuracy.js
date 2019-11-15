//measure accuracy using a hits counter
function tallyAccuracy(net, testData) {
  //hits counter counts correct guesses by computer
  let hits = 0;
  let runLog = [];

  testData.forEach(datapoint => {
    //first examine what the artificial brain predicted; NOTE: net.run will provide prediction even if input missing fields
    let output = net.run(datapoint.input);
    runLog.push('Articial brain finished running test data');
    let computerGuess = Math.round(output.diagnosis);
    //then compare the prediction with the expected output
    let providedDx = Math.round(datapoint.output.diagnosis);
    if (computerGuess === providedDx) {
      hits += 1;
    }
  });
  //make sure all the samples ran
  console.log(`Articial Brain ran ${runLog.length} tests.`);
  let accuracy = Number.parseFloat(hits / testData.length).toPrecision(4);
  return `${accuracy * 100} %`;
}

module.exports = tallyAccuracy;
