"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var index = 0;
  while (index < line.length){

    var re = new RegExp("(" + line[index] + ").*\\1","g");
    if (re.test(line)){
      index++;
    } else {
      return line[index];
    }
  }
}