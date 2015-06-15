"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(capitalizeWord(line));
    }
});

function capitalizeWord(line){
	return line.replace(/\b\w/g, function(item){
	  return item.toUpperCase();
	});
}
