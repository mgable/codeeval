"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(fileSize(line));
    }
});

function fileSize(line){
	return (fs.existsSync(line))? fs.statSync(line).size : 0;
}