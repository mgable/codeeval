"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.toLowerCase().split(""),
  results = arr.map(function(v,i,a){
    return (/[a-z ]/.test(v)) ?  v : " ";
  });
  
  return results.join("").replace(/ {2,}/g, " ").trim();
}