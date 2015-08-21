"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(",").map(function(v,i,a){
    return v.match(/(?:X)*(\.*)(?:Y)*/)[1];
  }).map(function(v,i,a){
    return v.split("").length;
  });
  
  return Math.min.apply(Math, arr);
  
}