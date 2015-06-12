"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(swapCase(line));
    }
});

function swapCase(word){
    var arr = word.split(""),
    results;
  
  results = arr.map(function(item){
    if(/[a-z]/.test(item)){
      return item.toUpperCase();
    }else if(/[A-Z]/.test(item)){
      return item.toLowerCase();
    }else{
      return item;
    }
  }).join("");
  
  return results;
}