"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(isArmstrong(line));
    }
});

function isArmstrong(num){
  var numArr = num.split("").map(function(item){return parseInt(item)}),
      pow = numArr.map(function(item){return Math.pow(item,num.length)}).reduce(function(a,b){return a + b},0);
  return pow === parseInt(num);
}