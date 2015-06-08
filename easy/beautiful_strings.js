"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		console.info(beautify(line));
    }
});

function beautify(str){
	var arr = str.split(""), 
      values = {},
      start = 26,
      total = 0,
      sums=[];
  
  arr.forEach(function(item){
    if (/\w/.test(item)){
      item = item.toLowerCase();
      (values[item]) ? values[item]++ :  values[item] = 1;
    }
  });
      
  for (var prop in values){
    sums.push(values[prop]);
  }
  
  sums.sort(function(a,b){return b-a;});
  
  total = sums.reduce(function(a,b){
    return a + (b * start--);
  },0);

  return total;
}