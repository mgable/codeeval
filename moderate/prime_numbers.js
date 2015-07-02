"use strict";
var fs  = require("fs"),
 cache = {};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(makePrimes(line));
    }
});

function isPrime(num) {
  if(cache[num])return cache[num];
  
  for (var x = Math.floor(num/2), limit = 2; x >= limit; x--) {
    if (num % x === 0) {
      cache[num] = false;
      return false;
    }
  }
  cache[num] = true;
  return true;
}


function makePrimes(lessThan){
	var results = [];
  for (var x = 2, limit = parseInt(lessThan); x <= limit; x++){
    if (isPrime(x)){
      results.push(x);
    }
  }
  return results.join(",");
}