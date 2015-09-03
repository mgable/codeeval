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
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

/*
function <name>(line){
  // body
}
*/
var data = "11111110 11111111 11111111 11111111 11111111 11101101 11111111 01111111 11110010 10100111;84.525784";
//var data = "1111111;2"
//var data = "01100000 1111111;11"
var dec_digits = [126, 48, 109, 60, 51, 91, 95, 112, 127, 123];
var bin_digits = ['1111110', '0110000','1101101','1111007','0110011','1011011','1011111','1110000','1111111','1111011'];

console.info(parse(data));

function parse(line){
  var arr = line.split(";"),
      target = arr[1],
      display = arr[0].split(" "),
      binaries = makeBinary(process(target)),
      matched = false;
  
  console.info(binaries);
  
  //while(){
    for(var x = 0, limit = binaries.length; x < limit; x++){
      if (!willWork(display[x],binaries[x])) {
        console.info("%s display does not work for %s", display[x],binaries[x])
        return false;
      }
    }
 // }
  
  return true;
}


function process(line){
  var pointFlag = false,
    arr = [],
      a = line.split("");
  
  while (a.length){
    var target = a.splice(0,1)[0];
    if (target === "."){
      pointFlag = true;
      arr[arr.length-1] += "." 
    } else {
      arr.push(target);
    }
  }

  if (!pointFlag){
     arr[arr.length-1] += ".";
  }

  return arr;
}

function makeBinary(num){
  var results = num.map(function(v,i,a){
    if (v.length >1){
      return bin_digits[parseInt(v)] + "1";
    }else{
      // no decimal
      return bin_digits[parseInt(v)] + "0";
    }
  });
  
  return results;
}

function willWork(display, target){
  if (display === "11111111") return true;
  if (display === "00000000") return false;
  
  var displayArry = display.split("").map(Number),
      targetArry = target.split("").map(Number),
      limit = displayArry.length;
  
  for (var x = 0; x < limit; x++){
    if (displayArry[x] === 0 && targetArry[x] === 1){
      console.info("does not match on bit " + x);
      return false;
    }
  }
    
    return true;
}