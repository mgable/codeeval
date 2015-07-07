"use strict";
var fs  = require("fs"),
	numToRom = [
		["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
		["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
		["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
		["M", "MM", "MMM"]
	];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(romanNumerals(line));
    }
});

function romanNumerals(line){
	var nums = line.split("").map(function(num){ 
		return parseInt(num);
	}).reduce(function(a, b, i, arr){
		if (b === 0) return a;
		return a + numToRom[((arr.length - 1)  - i)][(b-1)];
	},"");

	return nums;
}