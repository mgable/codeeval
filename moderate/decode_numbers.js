"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var groups = [],
      group,
      code = line.split(""),
      count = 0,
      end = 2,
      results = 1;
  
  while (group = code.slice(count++,end++)){
    if (group.length === 2){
      groups.push(group);
    } else {
      break;
    }
  }
  
  if (code.length > 3){
    var more = line.match(/\d{2}/g).map(function(v,i,a){
      return parseInt(v,10)}).every(function(v,i,a){
      return v > 0 && v < 27;
    });

    (more) ? results ++ : "";
  }
  
  var totals = groups.map(function(v,i,a){
    return parseInt((v[0] + v[1]), 10);
  });
  
  totals.forEach(function(v,i,a){
    if (v > 0 && v < 27){
      results++;
    }
  });
  
  return results;
}