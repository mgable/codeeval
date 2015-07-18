"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var result = line.split(";"),
      len = result[0],
      list = result[1].split(",").sort(function(a,b){return a - b}),
      dup;
 
  list.every(function(v,i,a){
    if (v === a[i+1]){
      dup = v;
      return false;
    }
    
    return true;
  });
  
  return dup;
}