"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var binaryNum = parseInt(data).toString(2),
      arr = binaryNum.match(/1/g);
  return arr ? arr.length : "0";
}
