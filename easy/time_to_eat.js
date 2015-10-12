"use strict";
var fs  = require("fs");
var second = 1000,
    minute = 60000,
    hour = 3600000,
    time = [hour, minute, second];

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var data = line.split(" ").map(function(v,i,a){
    
    var milliseconds =  v.split(":").reduce(function(f,n,i,a){
      return f + (parseInt(n, 10) * time[i]);
    },0);
    
    return {string:v, milliseconds: milliseconds};
  }).sort(function(a,b){
    return b.milliseconds - a.milliseconds;
  }).map(function(v,i,a){
    return v.string;
  });
  
  return data.join(" ");
}