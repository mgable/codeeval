"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(";"),
      arr = temp[0].split(","),
      itemCount = parseInt(temp[1],10),
      pointer = 0,
      results = [];
  
  while (arr.length){
    var chunk = arr.splice(0, itemCount);
    if (chunk.length === itemCount){
      chunk.reverse();
    }
    results.push(chunk);
  }
  
  return results.join(",");
}