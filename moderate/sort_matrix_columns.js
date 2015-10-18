"use strict";
var fs  = require("fs"),
	matrix = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(/\s?\|\s?/);
  
  matrix = temp.map(function(v,i,a){
    var a = v.split(" ");
    return  a.map(function(v){return parseInt(v,10)})
  });
  
  
  matrix = (flip(matrix));
  matrix.sort(sortIt);
  matrix = (flip(matrix));
  
  matrix.forEach(function(v,i,a){
    a[i] = v.join(" ");
  });
  
  return matrix.join(" | ");
}

function flip (matx){
  var temp = [];
  matx.forEach(function(v,i,a){
    v.forEach(function(v1,il,a1){
      temp[il] ? temp[il].push(v1) : temp[il] = [v1];
    });
  });
  
  return temp;
}

function sortIt(a,b){
  var index = 0;
  do {
    if (a[index] !== b[index]){
      return a[index] - b[index];
    }
  } while(index++ < a.length) 
  
  return 0;
}