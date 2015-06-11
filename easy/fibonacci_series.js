"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(sequenceFibonacci(line));
    }
});

function sequenceFibonacci(num){
  var seed = 0, results = 0, sum = 0,
      limit = parseInt(num);
  for(var x = 0; x < limit; x++){
    results = fibonacci(results);
  }
  
 return results;
  
 function fibonacci(line){
    if (seed + results < 1){
      sum = 1;
      results = sum;
    } else {
      sum = results + seed;
      seed = results;
      results = sum;
    }
    return sum;
  }
}