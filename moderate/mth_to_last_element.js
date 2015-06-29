"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        parse(line);
    }
});

function parse(line){
	var arr = line.split(" "),
		index = arr.pop(),
		parsedLine = arr.reverse(),
		value = parsedLine.slice(index-1,index).join("");

		if(value)console.info(value);
}