"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});


var index = -2;

function parse(line){
  var result, hasCheckpoint = false, direction,
    newIndex = (hasCheckpoint = line.indexOf("C") > -1) ? line.indexOf("C") : line.indexOf("_");
  
  if (index > -1){
    if (newIndex < index){
        direction = "/";
    } else if (newIndex > index){
        direction = "\\";
    } else {
        direction = "|";
    }
  } else {
  	direction = "|";
  }
  
  index = newIndex;  
  result = (hasCheckpoint) ? line.replace("C", direction) : line.replace("_", direction);
  
  return result;
}