"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        lowerCase(line);
    }
});

function lowerCase(line){
	if (line){
		console.info(line.toLowerCase());
	}
}