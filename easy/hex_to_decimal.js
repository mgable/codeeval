"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(hex_to_decimal(line));
    }
});


function hex_to_decimal(line){
  return parseInt(line, 16);
}
  
