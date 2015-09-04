"use strict";
/*
//1234567
-------
0110000 -1
1101101 -2
1111007 -3
0110011 -4
1011011 -5
1011111 -6
1110000 -7
1111111 -8
1111011 -9
1111110 -0
*/
var fs  = require("fs"),
    // based on the data above
    dec_digits = [126, 48, 109, 60, 51, 91, 95, 112, 127, 123],
    ALL_ON = 255,
    ALL_OFF = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(";"),
      target = arr[1],
      display = arr[0].split(" ").map(function(v,i,a){return parseInt(v,2)}),
      binaries = makeBinary(processTarget(target));
  
  while(display.length >= binaries.length){
    for(var x = 0, limit = binaries.length; x < limit; x++){
      if (!willWork(display[x],binaries[x])) {
        //console.info("%s display does not work for %s", display[x],binaries[x])
        display.shift();
        break;
      }
    }
    // did we get through a complete iteration and not fail
    if (x === limit) return 1;
  }
  return 0;
}

function processTarget(line){
  var pointFlag = false,
    results = [],
      a = line.split("");
  
  while (a.length){
    var target = a.splice(0,1)[0];
    if (target === "."){
      pointFlag = true;
      results[results.length - 1] += "." ;
    } else {
      results.push(target);
    }
  }

  if (!pointFlag){
     results[results.length - 1] += ".";
  }

  return results;
}

function makeBinary(num){
  var results = num.map(function(v,i,a){
    // is there a decimal point
    if (v.length > 1){
      return (dec_digits[parseInt(v)] << 1) | 1;
    }else{
      // no decimal
      return (dec_digits[parseInt(v)] << 1) ;
    }
  });
  
  return results;
}

function willWork(display, target){
  if (display === ALL_ON) return true;
  if (display === ALL_OFF) return false;
  
  return (Math.abs(display|~target) !== 1) ? false : true;
}