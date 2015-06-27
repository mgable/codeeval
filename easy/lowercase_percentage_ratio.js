"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(""),
      count = arr.length,
      lowercase = 0,
      lowerCaseRatio,
      upperCaseRatio;
  
  arr.forEach(function(item){
    if (/[a-z]/.test(item)) lowercase++ ;
  });
  
  lowerCaseRatio =  ((lowercase/count) * 100).toFixed(2);
  upperCaseRatio = (100.00 - lowerCaseRatio).toFixed(2);
  
  return "lowercase: " + lowerCaseRatio + " uppercase: " + upperCaseRatio;
}