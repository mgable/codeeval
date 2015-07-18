"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var upperCase = true;
  
  return line.toLowerCase().split("").map(function(item){
    if (/[a-zA-Z]/.test(item)){
      if (upperCase){
        upperCase = false;
        return item.toUpperCase();
      } else {
        upperCase = true;
        return item.toLowerCase();
      }
  	} else {
       return item;
  	}
  }).join("");
}