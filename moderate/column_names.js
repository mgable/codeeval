"use strict";
var fs  = require("fs"), 
	alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    header = [],
    base = alpha.length,
    index = 1,
    data = 3702;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
	header = [];
	calculate (line);
	return header.join("");
}

function calculate(line){
  var division = parseInt(line / base),
      remain = line % base;
  
  if (division && !remain){
    header.unshift(alpha[base - index]);
    calculate(division-index);
  }else if (division && remain){
    header.unshift(alpha[remain - index]);
    calculate(division);
  } else if (remain) {
    header.unshift(alpha[remain - index]);
  }
}