"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  return line.replace(/\w+/g, function(item){
    return item.replace(/(\d)([a-zA-Z]+)(\d)/, "$3$2$1");
  });
}