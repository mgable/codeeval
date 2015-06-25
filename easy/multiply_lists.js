"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(str){
  var temp = str.split(/\s*\|\s*/),
      first = temp[0].split(" "),
      second = temp[1].split(" "),
      result = [];
  
  result = first.map(function(item, index){
    return item * second[index];
  });
  
  return result.join(" ");
}