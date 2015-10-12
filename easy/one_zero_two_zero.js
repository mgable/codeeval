"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = [],
      count,
      temp = line.split(" "),
      zeros = parseInt(temp[0],10),
      limit = temp[1],
      re = new RegExp("0{" + zeros + "}");
  
  
  for (var x = 1; x <= limit; x++){
    arr.push(x.toString(2));
  }
        
  count = arr.map(function(v,i,a){
    return v.match(/0/g) ? v.match(/0/g).length : null;
  })
  .filter(function(v,i,a){
    return v === zeros;
 });
 
  return count.length;
}