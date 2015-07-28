"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var arr = data.split(",").map(function(item){return parseInt(item)}),
      results = [];
  
   arr.forEach(function(item, index){
    for (var x = (index+ 1), limit = arr.length; x <= limit; x++){
      results.push(sum(arr.slice(index,x)));
    }
  });

  return Math.max.apply(Math, results);
}

function sum (arr){
  return arr.reduce(function(a,b){return a+b},0);
}