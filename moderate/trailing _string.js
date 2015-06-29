"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var arr = data.split(","),
      phrase = arr[0],
      term = new RegExp(arr[1] + "$");
  
  return (term.test(phrase)) ? 1 : 0;
}