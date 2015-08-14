"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(" "),
      num = arr[0],
      pattern = arr[1],
      formula = pattern.match(/(\w*)([\+\-])(\w*)/),
      first = num.slice(0,formula[1].length),
      second = num.slice(formula[1].length),
      operator = formula[2];
  
  return (operator === "+") ? parseInt(first, 10) + parseInt(second, 10) : parseInt(first,10) - parseInt(second,10);

}