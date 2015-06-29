"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  return /\w+@\w+\.[a-zA-Z]{2,3}$/.test(data) ? "true" : "false";
}