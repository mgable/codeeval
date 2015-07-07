"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(str){
  var arr = str.split(","),
      words = [],
      digits = [];
  arr.forEach(function(item){
    if (isNaN(parseInt(item))){
      words.push(item)
    } else {
      digits.push(item);
    }
  });
  
  return words.join(",") + ( (words.length && digits.length) ? "|":"") + digits.join(",");
}