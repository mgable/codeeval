"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  return line.split(" ").reduce(function(a,b){
    return (a.length - b.length > 0)? a : b;
  },"").split("").map(function(item, index){
    return getSpaces(index) + item + " ";
  }).join("").trim();
}

function getSpaces(howMany){
  var str = "";
  for (var x = 0; x < howMany; x++){
    str+= "*";
  }
  return str;
}