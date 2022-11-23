// import blockchain components
const Block = require("../src/models/block");
const Blockchain = require("../src/models/blockchain");

module.exports = defaultBenchmark = (args) => {
  // parse arguments
  const {
    startDifficulty,
    stepSize,
    totalIterations,
    iterationsPerDiff,
    logTime,
  } = args;

  // initialize proof of work variables
  let difficulty = startDifficulty;
  const timedata = [];
  let subtimedata = [];

  for (let index = 0; index < totalIterations; index) {
    if (index != 0 && index % iterationsPerDiff == 0) {
      difficulty += stepSize;
      console.log(`Difficulty changed. New difficulty is ${difficulty}.`);
      if (difficulty > 3)
        console.log(
          `Difficulty levels above 3 will take expontentially more time and computation.`
        );

      timedata.push({
        difficulty,
        data: subtimedata,
      });
      subtimedata = [];
    }

    // init blockchain
    let bc = new Blockchain(difficulty);

    // start the timer
    const start = new Date().getTime();

    // proof of work computation
    bc.addNewBlock(
      new Block(1, "01/06/2020", {
        sender: "Iris Ljesnjanin",
        recipient: "Cosima Mielke",
        quantity: 50,
      })
    );
    bc.addNewBlock(
      new Block(2, "01/07/2020", {
        sender: "Vitaly Friedman",
        recipient: "Ricardo Gimenes",
        quantity: 100,
      })
    );

    // end timer
    const end = new Date().getTime();
    const totaltime = end - start;
    if (logTime) console.log(totaltime);
    subtimedata.push(totaltime);
  }

  console.log(JSON.stringify(timedata));
};
