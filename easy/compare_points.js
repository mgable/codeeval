"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var points = line.split(" ").map(function(item){return parseInt(item)}),
      origin = [points[0], points[1]],
      destination = [points[2], points[3]],
      direction = "";
  
  direction = compare(origin[1], destination[1],["N","S"]);
  direction += compare(origin[0], destination[0],["E","W"]);
  
  return direction.replace("here", "");
}

function compare(a,b, direction){
  if (a === b){
      return "here";
  } else if (a < b){
      return direction[0];
  } else {
      return direction[1];
  }
}