"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

var data = "-3,3,-1,1,1,-1,3,-3";

console.info(parse(data));

function parse(line){
  var arr = line.split(","),
      point1 = {x: arr[0], y: arr[1], height: arr[2] - arr[0], width: arr[3] - arr[1]},
      point2 = {x: arr[4], y: arr[6], height: arr[5] - arr[4], width: arr[7] - arr[6]},
      
  return line;
}





function isOverlapping(a, b) {
  return !(
    ((a.y + a.height) < (b.y)) ||
    (a.y > (b.y + b.height)) ||
    ((a.x + a.width) < b.x) ||
    (a.x > (b.x + b.width))
  );
}