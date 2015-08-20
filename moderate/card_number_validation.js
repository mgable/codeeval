"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});


function parse(line){
  var arr = line.replace(/ /g, "").split("").reverse().map(function(v,i,a){
    return parseInt(v,10);
  });
  
  var results = arr.reduce(function(a,b,i){
    if ((i+1) % 2 === 0){
      var product = b * 2;
      return (product.toString(10).length < 2) ? a + product : a + add(product.toString(10));
    } else {
      return a + b;
    }
  },0);
  
  return (results % 10 === 0) ? 1 : 0;
}

function add(num){
  return num.split("").map(function(v,i,a){
    return parseInt(v,10);
  }).reduce(function(a,b){return a + b});
}