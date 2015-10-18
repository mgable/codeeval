"use strict";
var fs  = require("fs"),
	data = [],
	distances = [],
    points = [],
    index = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "0") {
        parse(line);
    } else {
    	console.info(getResults());
    }
});

function parse(line){
	if (index++){
		data.push(line);
	}
}

function getResults(){
  points = data.map(function(v,i,a){
    return v.split(" ");
  });
  
  points.forEach(function(v,i,a){
    if (a[i+1]){
        distances.push(calculateLength(v,a[i+1]));
    }
  });
  
  return Math.min.apply(Math, distances).toFixed(4);
  
}

function calculateLength(pt1, pt2){
  var point_1 = pt1,
      point_2 = pt2,
      dx = Math.abs(point_1[0] - point_2[0]),
      dy = Math.abs(point_1[1] - point_2[1]);

  return Math.sqrt( (Math.pow(dx,2) + Math.pow(dy,2)) );
}