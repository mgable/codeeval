"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	//console.info("the line is " + line);
        console.info(parse(line));
    }
});

function parse(line){
    var start = parseInt(line, 10),
        iterations = 0,
        limit = 100;

    if (isPalindrome(start)){
    	return iterations + " " + start;
    }
  
  while (iterations++ < limit){
   start = addReverse(start);
    if (isPalindrome(start)){
      return iterations + " " + start;
    }
  }
}

function isPalindrome(num){
  var str = num.toString(10);
  return str === str.split("").reverse().join("");
}

function addReverse(num){
  return num + getReverse(num);
}

function getReverse(num){
  return parseInt(num.toString(10).split("").reverse().join(""), 10);
}
