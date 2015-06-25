"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
      console.info(parse(line));
    }
});

function parse(str){
  var arr = str.split(" "),
      result = "";
  
  do {
    var flag = arr.shift(), value = arr.shift();
    if (flag == "00"){
      result += makeOnes(value.length);
    }else {
      result += value;
    }
  }while(arr.length - 1 > 0);
  
      
  return parseInt(result, 2)
  
}

function makeOnes(howMany){
  var results = "";
  
  for (var i = 0; i < howMany; i++){
    results += "1";
  }
  
  return results;
}