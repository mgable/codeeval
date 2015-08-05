"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

var data = "100 100";

// true === open

console.info(parse(data));

function parse(line){
  var temp = line.split(" ").map(function(v,i,a){return parseInt(v)}),
      doors = temp[0],
      iterations = temp[1],
      rows = []
     
  for (var i = 0, limit = doors; i < limit; i++){
    rows[i] = true;
  }
  
  for (var i = 0; i < iterations; i ++){
    rows.forEach(function(v,i,a){
      if ((i+1) % 2 === 0){
        a[i] = false;
      }
    });

    rows.forEach(function(v,i,a){
      if ((i+1) % 3 === 0){
        a[i] = !a[i];
      }
    })

  }
  rows[rows.length - 1] = !rows[rows.length - 1];
  
  return rows.reduce(function(a,b){
    if (b === true){
      return a += 1;
    }else{
      return a;
    }
  }, 0);
}