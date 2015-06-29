"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var arr = data.split(/,\s?/),
      line = arr[0],
      replace = new RegExp("[" + arr[1] +"]", "g");
  return line.replace(replace, "");
}