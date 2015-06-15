"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(calculateDistance(line));
    }
});

function calculateDistance(line){
	var arr = line.split(/[\(\), ]/).filter(function(item){
	  return item !== "";
	}).map(function(item){
	  return parseInt(item);
	});

	return Math.sqrt(Math.pow(arr[0] - arr[2], 2) + Math.pow(arr[1] - arr[3],2));
}
