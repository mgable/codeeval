"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(readMore(line));
    }
});

function readMore(line){
	if (line.length <= 55) { return line; }
	var newLine = line.slice(0,39);
	return newLine.replace(/\s\w*$/,"") + "... <Read More>";
}