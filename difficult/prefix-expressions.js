"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

// https://en.wikipedia.org/wiki/Polish_notation
function parse (line){
  var arr = line.split(" ").reverse(),
      stack = [],
      operand1,
      operand2,
      total = 0;
  
  arr.forEach(function(v,i,a){
    if (/\d+/.test(v)){
      stack.unshift(v);
    } else {
      operand1 = stack.shift();
      operand2 = stack.shift();
      total = eval (operand1 + v + operand2)
      stack.unshift(total);
    }
  });
  
  return (/\d+/.test(stack[0])) ? stack[0] : 0;
}