"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.info(lowerCase(line));
    }
});

function lowerCase(line){
	return line.toLowerCase();
}