"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(remainder(line));
    }
});

function remainder(line){
  var arr  = line.split(","),
    a = parseInt(arr[0]), b = parseInt(arr[1]);
  return a - (parseInt(a / b) * b);
}