"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

var data = "(1,6), (6,7), (2,7), (9,1)";
var data = "(4,1), (3,4), (0,5), (1,2)";
//var data = "(4,6), (5,5), (5,6), (4,5)";
//var data = "(2,2), (2,4), (4,4), (4,2)";

console.info(parse(data));

function parse(line){
  var regex = /\((\d),(\d)\)/,
    temp = line.split(", ").map(function(v,i,a){
    var match = regex.exec(v);
    if (match) return [match[1], match[2]];
  }), results = [];
  
  for (var x = 0; x < temp.length; x++){
    var first = temp[x++],
        second = temp[x];
    results.push([Math.abs(first[0]-second[0]),Math.abs(first[1] - second[1])])
  }
  
  console.info(results);
  return results[0][0] === results[1][0] && results[0][1] === results[1][1]? "True" : "False";
}