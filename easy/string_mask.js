"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(stringMask(line));
    }
});

function stringMask(line){
  var arr = line.split(" "),
      word = arr[0].split(""),
      mask = arr[1].split("");
  
  return mask.map(function(item, index){
    return  (item === "1")? word[index].toUpperCase() : word[index];;
  }).join("");
};