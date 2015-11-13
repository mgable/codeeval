"use strict";
var fs  = require("fs"), cache = {};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
	var data = line.split(",").map(function(v){return parseInt(v)}), 
		primes = printPrime(Math.max.apply(Math, data)),
		primesInData = [];

		data.forEach(function(v,i,a){
			if (primes.indexOf(v) > -1){
				primesInData.push(v);
			}
		});

	return primesInData;
}

function printPrime(value) {
     var sieve = [], i, j, primes = [];
    for (i = 2; i <= value; i++) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i * i; j <= value; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}