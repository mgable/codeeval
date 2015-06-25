"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(","),
      len = arr.length,
      temp = {},
      largest = 0,
      obj = {};

 arr.forEach(function(item){
   if (temp[item]){
     temp[item]++;
   }else{
     temp[item] = 1;
   }
  });
  
  for (var prop in temp){
    if (temp[prop] > largest){
      largest = temp[prop];
      obj.count = temp[prop];
      obj.prop = prop;
    }
  }
  
  return (obj.count > len / 2) ? obj.prop : "None";
}