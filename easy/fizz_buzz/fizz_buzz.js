"use strict";
/*Sample code to read in test cases:*/
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var input = line.split(" "),
		results = [], 
		firstDividor = +input[0],
		secondDividor = +input[1],
		count = +input[2];

    if (line !== "") {
    	for (var i = 1; i <= count; i++){
    		results.push(fizzBuzz(i));
    	}
    }

    function fizzBuzz (item){
    	if (item % firstDividor === 0 && item % secondDividor === 0){
			return "FB";
		} else if (item % firstDividor === 0){
			return "F";
		} else if (item % secondDividor === 0){
			return "B";
		} else {
			return item;
		}
    }
    console.info(results.join(" "));
});