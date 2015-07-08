"use strict";
var fs  = require("fs"),
	register = [
	  {'10000':'ONE HUNDRED'},
	  {'5000': 'FIFTY'},
	  {'2000':'TWENTY'},
	  {'1000':'TEN'},
	  {'500':'FIVE'},
	  {'200':'TWO'},
	  {'100':'ONE'},
	  {'50':'HALF DOLLAR'},
	  {'25':'QUARTER'},
	  {'10':'DIME'},
	  {'5': 'NICKEL'},
	  {'1': 'PENNY'}
	];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(";"),
      pp = parseFloat(arr[0] * 100),
      ch = parseFloat(arr[1] * 100),
      change = ch - pp,
      coins = [];
  
  if (change < 0) return "ERROR";
  if (change === 0) return "ZERO";
  
  register.forEach(function(v,i,a){
  	for (var prop in v){
	    var count = parseInt(change / parseInt(prop));
	    if (count){
	      for (var ii = 0, limit = count; ii < limit; ii++){
	        coins.push(v[prop]);
	      }
	      change -= count * parseInt(prop);
	    }
	  }
  });
  
  return coins.join(",");
}