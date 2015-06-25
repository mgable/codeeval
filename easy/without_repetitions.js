"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(withoutRepetitions(line));
    }
});

function withoutRepetitions(line){
	return line.replace(/(\w)\1+/g, "$1");
}