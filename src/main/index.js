const callBenchmarkScript = require("./mode-callers/benchmark");

if (process.env.MODE == "benchmark") {
  callBenchmarkScript();
}
