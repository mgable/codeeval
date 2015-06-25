"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(str){
	var myArray,
		myRe = /(\d{1,2})(\b\s\1)*/g,
		results = [];
	while ((myArray = myRe.exec(str)) !== null) {
	  var temp = myArray[0].split(" ");
	  results.push(temp.length, temp[0]);
	}

	return results.join(" ");
}