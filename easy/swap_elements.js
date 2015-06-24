"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(str){
  var temp = str.split(/\s*:\s*/),
      arr = temp[0].split(" "), positions = temp[1].split(",");
  positions.forEach(function(item){
    var temp = item.split("-"),
        target = parseInt(temp[0]),
        destination = parseInt(temp[1]);
    
    temp = arr[destination];
    arr[destination] = arr[target];
    arr[target] = temp;

  });
  
  return arr.join(" ");
}