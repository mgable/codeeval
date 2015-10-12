"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var poly = line.split(/, /).map(function(v,i,a){
    var results = v.match(/\((\d),(\d)\)/),
        arry = [results[1], results[2]];
    return arry;
  }).sort(sortIt);

  //console.info(getDistances(poly));
  
  return isSquare(getDistances(poly));
}

// when all else fails - find the algorithm
// http://programmers.stackexchange.com/questions/176938/how-to-check-if-4-points-form-a-square
// http://www.mathopenref.com/coorddist.html

function getDistances(data){
  var distances = [];
  for (var x = 0, limit = data.length; x < limit; x++){
    var source = data.shift();
    distances.push(data.map(function(v,i,a){
      return calculateLength(source, v);
    }).sort(function(a,b){return a - b}));
    data.push(source);
  }
  
  return distances;
}

function isSquare(poly){
  var distance = poly.shift();
  
  if (distance.every(function(v,i,a){
    return v === 0;
  })){
    return false;
  }
  
  return poly.every(function(v,i,a){
    return v.every(function(v1,i1,a1){
      return v1 === distance[i1];
    });
  });
}

function calculateLength(pt1, pt2){
  var point_1 = pt1,
      point_2 = pt2,
      dx = Math.abs(point_1[0] - point_2[0]),
      dy = Math.abs(point_1[1] - point_2[1]);

  return Math.sqrt( (Math.pow(dx,2) + Math.pow(dy,2)) );
}

function sortIt(a,b){
  if (a[0] === b[0]){
    return parseInt(a[1],10) - parseInt(b[1],10);
  } else {
    return parseInt(a[0],10) - parseInt(b[0],10);
  }
}