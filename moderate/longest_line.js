(function(){

	"use strict";
	var fs  = require("fs"), data = [], lineCount;
	fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	    if (line !== "") {
	        data.push(line);
	    }
	});

	lineCount = data.shift();

	data.sort(function(a,b){
		return b.length - a.length;
	});

	data.length = lineCount;

	console.info(data.join("\n"));

})()