"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(/\s\|\s/),
      words = arr[0].split(" "),
      target = arr[1], 
      results = [];
  
  results = words.map(function(v,i,a){
    return doIt(v,target);
  }).filter(function(v,i,a){
    if (v) return v;
  });
  
  return (results.length) ? results.join(" "): "False";
}


function doIt(target, search){
  var targetArr = target.split(""),
      searchArr = search.split(""),
      hasAll = true,
      index;
  
  searchArr.forEach(function(v,i,a){
    if((index = targetArr.indexOf(v)) > -1){
      targetArr.splice(index, 1);
    } else {
      hasAll = false;
    }
  });
  
  return (hasAll)? target : false;
}