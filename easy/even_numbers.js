"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(isEven(line));
    }
});

function isEven(num){
  return (parseInt(num) % 2 === 0) ? 1 : 0;
}