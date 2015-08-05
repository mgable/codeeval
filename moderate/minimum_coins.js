"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var amount = parseInt(line), coins = [5,3,1], result = 0;
  
 coins.forEach(function(v,i,a){
   if (v <= amount){
     var coins = Math.floor(amount / v);
     result += coins
     amount -= coins * v;
   }
  });
  
  return result;
  
}