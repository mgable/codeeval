"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(rightMostChar(line));
    }
});

function rightMostChar(line){
  var arr = line.split(","),
      words = arr[0],
      occurance = arr[1];
  
  return words.lastIndexOf(occurance);
}
  