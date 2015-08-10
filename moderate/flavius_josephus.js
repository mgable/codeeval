"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(","),
      count = temp[0],
      steps = temp[1],
      arr = [],
      results  = [];
  
  for (var x = 0; x < count; x++){
      arr[x] = x;
  }
  
  while (arr.length){
    for (var i = 0; i < (steps - 1); i++){
      arr.push(arr.shift());
    }
    results.push(arr.shift());
  }
  
  return results.join(" ");
}