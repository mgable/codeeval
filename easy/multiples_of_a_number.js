"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(multiples(line));
    }
});

function multiples(a){
  var arr = a.split(","),
      first = parseInt(arr[0]),
      second = parseInt(arr[1]),
      num = 0,
      x = 0;

  while (num < first) {
      num = Math.pow(2, x++);
  }

  return num;
}