"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	console.info(intersection(line));
    }
});

function intersection(line){
	//var [left, right] = line.split(";"),
	var groups = line.split(";"),
		inter = [],
		left = groups[0].split(","),
		right = groups[1].split(",");
	inter = left.filter(function(item){
		if (right.indexOf(item) > -1){
			return item;
		}
	});

	return inter.toString();
}