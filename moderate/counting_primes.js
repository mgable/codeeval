"use strict";
var fs  = require("fs"),
	cache = {};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(","),
      start = parseInt(arr[0]),
      end = parseInt(arr[1]),
      primes = [];
  
  for (var i = start; i <= end; i++){
    if (isPrime(i)){
      primes.push(i);
    }
  }
  
  return primes.length;
}

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