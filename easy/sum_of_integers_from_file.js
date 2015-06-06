"use strict";

var fs  = require("fs"),
	results = 0;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	results += parseInt(line);
    }
});

console.info(results);