"use strict";
var fs  = require("fs"), re = /\-?\d{1,3}(\.\d{1,2})?/g;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

//You can use Pythagoras to measure the distance between your point and the centre and see if it's lower than the radius:
function parse(line){
  var temp = line.split("; ").map(function(v,i,a){
    return v.split(": ")[1];
  }), circle = cleanUp(temp);
  
  return calculateLength(circle[0],circle[2]) < circle[1];
}

function cleanUp(arry){
  var center = arry[0].match(re).map(parseFloat),
      radius = parseFloat(arry[1],10),
      point = arry[2].match(re).map(parseFloat);
  
  return [center, radius, point]
}

function calculateLength(pt1, pt2){
  var point_1 = pt1,
      point_2 = pt2,
      dx = Math.abs(point_1[0] - point_2[0]),
      dy = Math.abs(point_1[1] - point_2[1]);

  return Math.sqrt( (Math.pow(dx,2) + Math.pow(dy,2)) );
}