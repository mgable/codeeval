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
    var nums = [], primes = [], 
		limit = Math.sqrt(value);

    for(var i = 2; i < value; i++) {
       nums[i] = true;
    }

    for(var i = 2; i < limit; i++) {
        if(nums[i] === true) {
            for(var j = i * i; j < value; j += i) {
                nums[j] = false;
            }
        }
    }

    nums.forEach(function(v,i,a){
		if (v){
			primes.push(i);
		}
	});
    
    return primes;
}