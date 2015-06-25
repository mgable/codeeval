"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(findAWriter(line));
    }
});

function findAWriter(line){
  var arr = line.split(/\|\s?/),
      key = arr[0].split(""),
      code = arr[1].split(" ");
  
  return code.map(function(item){
    return key[parseInt(item)-1];
  }).join("");
}