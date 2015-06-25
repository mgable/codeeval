"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(str){
  var temp = str.split(","),
      target = parseInt(temp[0]).toString(2).split("");
  return target[target.length - temp[1]] === target[target.length - temp[2]];
}