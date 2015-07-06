"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		console.info(getUniques(line).toString());
	}
});

function getUniques(str){
	var array = str.split(/,\s?/),
		results = [],
		cache = [];

	results = array.filter(function(v,i,a){
		return cache.indexOf(v) === -1 ? cache.push(v) : false;
	});

	results.forEach(function(v,i,a){
		a[i] = parseInt(v,10);
	});

	return results.sort(function(a,b){return a - b;});
}