"use strict";
var fs  = require("fs"), cache = {};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
	var data = line.split(",").map(function(v){return parseInt(v)}), 
		primes = data.filter(isPrime);

	return primes;
}

function isPrime(num){
	for (var x = 2; x < num; x++){
		if (num % x === 0){
			return false;
		}
	}

	return num > 1;
}