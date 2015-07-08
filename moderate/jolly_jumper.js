"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var list = line.split(" "),
	  last = list.length - 1,
      isJolly = list.every(function(v,i,a){
        var dif = Math.abs(v - a[i+1]).toString();
        return (i < last) ? ( a.indexOf(dif) > -1 ? true : false) : true;
      });

  return isJolly ? "Jolly" : "Not jolly";
}