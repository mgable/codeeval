"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(/\s?\|\s?/),
      names = temp[0].split(" "),
      num = temp[1] - 1;
  
  while(names.length > 1){
    if (num < names.length){
      names.splice(num,1);
    } else {
      names.splice(num % names.length,1)
    }
  }
  return names[0];
}