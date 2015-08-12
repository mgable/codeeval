"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  if (line.length <= 55) return line;
  var seg = line.slice(0,40);
  if (/ /.test(seg)){
    seg = seg.replace(/ ([\w-])*$/, "") + "... <Read More>";
  }
  return seg;
}