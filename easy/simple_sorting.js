"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(simpleSort(line));
    }
});

function simpleSort(nums){
	return  nums.split(" ").map(function(item){return parseFloat(item).toFixed(3)}).sort(function(a,b){return a - b}).join(" ");
}