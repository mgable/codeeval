"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(selfDescribingNumbers(line));
    }
});


function selfDescribingNumbers(line){
	var arr = line.split(""), 
      isSelfDescribing = 1;
  
  for(var x = 0, limit = arr.length; x < limit; x++){
    var count = parseInt(arr[x]),
        re = new RegExp(x, "g"),
        matches = line.match(re);
    
    if (matches && matches.length && matches.length === count || (matches === null && count === 0)){
    } else {
      isSelfDescribing = 0;
      break;
    }
  }
  
  return isSelfDescribing;
}
