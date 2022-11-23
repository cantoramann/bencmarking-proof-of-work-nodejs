module.exports = () => {
  const yargs = require("yargs");
  const benchmarkscript = require("../../../scripts/defaut-benchmark");

  // command line validation script
  const args = yargs.argv;

  // get the arguments
  const startDifficulty = args.startDifficulty || args.sd || 1;
  const stepSize = args.stepSize || args.ss || 1;
  const totalIterations =
    args.totalIterations || args.totalIters || args.ti || 10000;
  const iterationsPerDiff =
    args.iterationsPerDiff || args.itersPerDiff || args.ipd || 2000;
  const logTime = (args.log && args.log.toLowerCase() == "true") || false;

  benchmarkscript({
    startDifficulty,
    stepSize,
    totalIterations,
    iterationsPerDiff,
    logTime,
  });
};
