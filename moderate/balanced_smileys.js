"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  if (check (line)){
    return "YES";
  }
  
  return check(remove(line)) ? "YES" : "NO";
  
}

function check(line){
  var temp = line.split(""),
      count = 0;
  
  for (var x = 0; x < temp.length; x++){
    if (temp[x] === "("){
      count++;
    } else if (temp[x]===")"){
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  
  return (count === 0) ? true : false;
}

function remove(str){
  return str.replace(/\:(\(|\))/g, "");
}