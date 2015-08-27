"use strict";
var fs  = require("fs");

var line1 = "-**----*--***--***---*---****--**--****--**---**--",
    line2 = "*--*--**-----*----*-*--*-*----*-------*-*--*-*--*-",
    line3 = "*--*---*---**---**--****-***--***----*---**---***-",
    line4 = "*--*---*--*-------*----*----*-*--*--*---*--*----*-",
    line5 = "-**---***-****-***-----*-***---**---*----**---**--",
    line6 = "--------------------------------------------------",
    lines = [line1,line2,line3,line4,line5,line6],
    key = ["-", "*"],
    numbers = lines.map(makeNumbers);

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        parse(line);
    }
});

function parse(data){
  var line = data.replace(/\D/g, "");
  print(line);
}


function makeNumbers(data){
  var results = [],
      line = data.split("");

  while (line.length){ 
    results.push(parseInt(line.splice(0,5).map(function(v,i,a){
      return key.indexOf(v);
    }).join(""),2));
  }
  
  return results;
}

function print(whichNum){
  var results= "",
      targets = whichNum.split("");
  
    numbers.forEach(function(v,i,a){
      results = [];
      targets.forEach(function(v1,i1,a1){
        results += (expand(v[parseInt(v1,10)]));
      });
      
      console.info(results);
    });
}

function expand(what){
    var num = pad(what.toString(2),5),
        arr = num.split("").map(function(v,i,a){
          return key[v];
        });
  return arr.join("");
}

function pad(n,l){
  var diff = l - n.length;
  for (var x = 0; x < diff; x++){
    n = "0" + n;
  }
  
  return n;
}