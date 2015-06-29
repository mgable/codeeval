"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
	var arr = line.split(" ").reverse(), results = [];

	while(arr.length){
		results.push(arr.shift());
		arr.shift();
	}

	return results.join(" ");
}