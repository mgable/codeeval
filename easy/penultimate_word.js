"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(penultimateWord(line));
    }
});

function penultimateWord(str){
	return str.match(/\w*(?=\s\w*$)/)[0];
}