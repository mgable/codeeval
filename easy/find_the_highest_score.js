"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line. split(/\s*\|\s*/),
      arr = temp.map(function(v,i,a){
        return v.split(" ");
      }),
      results = [];
  
  for (var x = 0; x < arr[0].length; x++){
    var a = [];
    for(var i = 0; i < arr.length; i++){
      a.push(arr[i][x])
    }
    results.push(a);
  }
  
  return results.map(function(v,i,a){
    return Math.max.apply(Math, v)
  }).join(" ");
}