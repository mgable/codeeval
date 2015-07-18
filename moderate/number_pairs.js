"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var arr = data.split(";"),
      numbers = arr[0].split(",").map(function(item){return parseInt(item)}),
      total = arr[1].toString(),
      results = [];
  
  while (numbers.length > 1){
    var first = numbers.pop(),
        target = total - first,
      index = numbers.indexOf(target);
    
    if (index > -1){
      results.push(target + "," + first);
      numbers.splice(index,1);
    }
  }
  
  return results.length ? results.join(";") : "NULL";
}