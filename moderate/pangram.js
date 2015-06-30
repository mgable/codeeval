"use strict";
var fs  = require("fs"),
	alphabet = ["a","b","c","d","e","f","g","h","i","j","k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var results = data.replace(/\W/g, "").toLowerCase().split("").sort().filter(function(item, index, arr){
    if (index === 0){
      return true;
    }
    return !(item === arr[index - 1]);
  }),
      found = 0,
  
  missing = alphabet.filter(function(item, index, arr){
    var isThere = (item === results[index - found]);
    if (!isThere){
      found++;
    }
    return !(item === results[index - found]);
  }); 
  
  return missing.length ? missing.join("") : "NULL";
}