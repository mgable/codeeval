"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(fileSize(line));
    }
});

//http://stackoverflow.com/questions/2219526/how-many-bytes-in-a-javascript-string
function fileSize(line){
	return encodeURI(line).split(/%..|./).length - 1;
}