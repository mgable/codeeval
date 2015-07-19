"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(","),
      rectangle1 = {x: parseInt(arr[0]), y: parseInt(arr[1]), height: Math.abs(arr[2] - arr[0]), width: Math.abs(arr[3] - arr[1])},
      rectangle2 = {x: parseInt(arr[4]), y: parseInt(arr[6]), height: Math.abs(arr[5] - arr[4]), width: Math.abs(arr[7] - arr[6])};
      
  return isOverlapping(rectangle1, rectangle2) ? "True" : "False";
}

function isOverlapping(a, b) {
  return !(
    ((a.y + a.height) < (b.y)) ||
    (a.y > (b.y + b.height)) ||
    ((a.x + a.width) < b.x) ||
    (a.x > (b.x + b.width))
  );
}