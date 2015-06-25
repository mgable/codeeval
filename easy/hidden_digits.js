"use strict";
var fs  = require("fs"),
	filter = {a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(translate(line));
    }
});

function translate(str){
  var arr = str.split(""),
      results  = arr.filter(function(item){
    return  /[a-j0-9]/.test(item);
  }).map(function(item){
     return filter[item] > -1? filter[item] : item;
  });
  
  return results.length ? results.join("") : "NONE";

}