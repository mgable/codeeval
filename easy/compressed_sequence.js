"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(" "), results = [], temp = [];
  arr.forEach(function(v,i,a){
    if (temp.length !== 0 && temp[0] != v){
      results.push(temp);
      temp = [];
    }
    temp.push(v);
  });
  
  results.push(temp);
  
  return results.map(function(v,i,a){
    return [v.length, v[0]];
  }).join(" ").split(",").join(" ");
}