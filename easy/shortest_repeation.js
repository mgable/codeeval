"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var source = line, counter = 1, selected;
  
  while (counter < source.length){
    var re = new RegExp("^(\\w{" + counter++ + "})\\1+$",'g'), results;
    results = source.match(re);
    if (results && results[0] && results[0] === line){
      return  --counter;
    }
  }
  return line.length;
}
