"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

// -2,2,2,-2,0,0,1,1
function parse(line){
  var arr = line.split(",").map(function(item){return parseInt(item);}),
      rectangle1 = {x: arr[0], y: arr[1], width: Math.abs(arr[0] - arr[2]), height: Math.abs(arr[1] - arr[3])},
      rectangle2 = {x: arr[4], y: arr[5], width: Math.abs(arr[4] - arr[6]), height: Math.abs(arr[5] - arr[7])};
      
  return isOverlapping(rectangle1, rectangle2) ? "True" : "False";
}

function isOverlapping(a, b) {
  console.info(a);
 console.info(b);
  return !(
    ((a.y + a.height) <= (b.y)) ||
    (a.y >= (b.y + b.height)) ||
    ((a.x + a.width) <= b.x) ||
    (a.x >= (b.x + b.width))
  );
}