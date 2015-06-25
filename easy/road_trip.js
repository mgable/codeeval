"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(translate(line));
    }
});

function translate(str){
  var result = 0, last, arr = str.match(/\b([\w,]+)\b/g).map(function(item){
    var obj = {},temp = item.split(",");
    obj[temp[0]] = temp[1];
    return obj;
  }).sort(function(a,b){
    for (var propA in a){
      for (var propB in b){
        return parseInt(a[propA]) - parseInt(b[propB]);
      }
    }
  }).map(function(item){
    for(var prop in item){
      result = item[prop] - ((last) ? last : 0);
      last = item[prop];
      return result;
    } 
  });
  
  return arr.join(",");

}