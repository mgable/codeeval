"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.info(readMore(line));
    }
});

function readMore(line){
	if (line.length <= 55) { return line; }
	return line.replace(/^(.{0,39})(\s\b.*$)/, "$1... <Read More>");
}