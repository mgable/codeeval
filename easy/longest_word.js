"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(longestWord(line));
    }
});

function longestWord(line){
	return line.split(/\b[\s|\W|\b]+/).reduce(function(a,b){
	  return  (a.length > b.length || a.length === b.length)? a : b;
	},"");
}
