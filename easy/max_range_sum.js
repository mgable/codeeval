"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(";"),
      wind = parseInt(arr[0]),
      data = arr[1].split(" ").map(function(item){return parseInt(item)}),
      results = [];
  
  while(data.length >= wind) {
    var temp = data.slice(0,wind);
    results.push(temp.reduce(sum, 0));
    data.shift();
  }
       
  results = Math.max.apply(Math, results);
  return results > 0? results: 0;
  
}

function sum (a,b){return a + b}