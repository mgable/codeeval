"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(","),
      word = temp[0],
      target = temp[1],
      results, 
      rotator = makeRotator(word);
  
  while((results = rotator()) !== null){
    if (results === target) return "True";
  }
  
  return "False";
}


function makeRotator (word){
  var position = 0,
      whole = word.split("");
  return function(){
    if (position++ > whole.length - 1) return null;
    whole.push(whole.shift());
    return whole.join("");
  };
}