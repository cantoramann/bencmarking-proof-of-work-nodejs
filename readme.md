# Simple Demo Blockchain

This is a very basic script to explore the computation time of proof of work consensus model (SHA-256). The blockchain implementation is used from [https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/](https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/). I am planning to make personal changes on the implementation.

Currently, it supports `npm run benchmark` only. More will be added as I will keep exploring personally.

Command line arguments:

`startDifficulty or sd`: the starting difficulty for proof of work. Defaults to 1.

`iterationsPerDiff or itersPerDiff or ipd`: iterations per each difficulty level. Defaults to 2,000.

`stepSize or ss`: increment value for difficulty value. Defaults to 1.

`totalIterations or totalIters or ti`: total number of iterations. Defaults to 10,000.

`log`: log the time (ms) of each computation on the terminal. Defaults to false.

The recommended command line call is:

`npm run benchmark -- --startDifficulty=1 --stepSize=1 --totalIters=1515 --iterationsPerStep=500 --log=false`

Log is recommended to be false only because printing will increase the overall runtime of the script.

means that the starting difficulty is 2. After 2,000 iterations for this level, it will increase the difficulty by 1 and will follow the same procedure until a total of 10,000 procedures.

What else might come:

- Comparing different deterministic hash functions.
- Difficulty to byte length ratio
- Changing the difficulty procedure to not leading `0` s but other patterns.
