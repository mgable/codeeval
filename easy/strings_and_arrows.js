"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var results = [],
      data = line,
      start = 0,
      frag = data.slice(start++,5);
  
  while(frag.length >= 5){
    var arrow = frag.match(/(\<\-\-\<\<)|(\>\>\-\-\>)/g);
    if (arrow) results.push(arrow);
    frag = data.slice(start, start++ + 5);
  }
  
  return results.length
}