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
      second = parseInt(arr[1]);

  for (var x = 1; x < 20; x++){
    var num = Math.pow(2, x);
    if (num > first) { return num};
  }
}