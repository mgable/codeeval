"use strict";
var fs  = require("fs"),
	matrix = [[1,2],[-1,2],[1,-2],[-1,-2],[2,1],[-2,1],[2,-1],[-2,-1]],
    alphabet = ["a", "b","c","d","e","f","g","h"];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(""),
      results = [],
      data = [toNumber(temp[0]), parseInt(temp[1])];
  
  matrix.map(function(item){

    var a = data[0] + item[0],
        b = data[1] + item[1];
    
    if ((a > 0 && a < 9) && (b > 0 && b < 9)){
     
      results.push(toAlpha(a) + b);
    }
  });
  
  return results.sort().join(" ");
}

function toAlpha(num){
  return alphabet[num - 1];
}

function toNumber(char){
  return alphabet.indexOf(char) + 1;
}
  