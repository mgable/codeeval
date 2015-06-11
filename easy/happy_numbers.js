"use strict";
var fs  = require("fs");
	
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        console.log(isHappy(line));
    }
});

function isHappy(i){
  var number = i,  tries = 10, isH = false;

  while(tries-- > 0){
    number = parse(number.toString())
    if (number === 1){
      isH = true;
      break;
    }
  }
  
  return (isH)? 1 : 0;
}

function parse(line){
	var arr = line.split("");

	return arr.map(function(item){
		var i = parseInt(item)
		return Math.pow(item,2);
	}).reduce(function(a,b){
		return a + b;
	},0);
}