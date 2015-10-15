"use strict";
var fs  = require("fs"),
	time = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D":500, "M":1000};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var romarabic = line.split(""),
    results = 0;
  
  while(romarabic.length){
    var arabic = romarabic.shift(),
        roman = romarabic.shift(),
        last = romarabic[1];
    
    if (last){
      if (time[last] > time[roman]){
        results -= arabic * time[roman];
      } else {
        results += arabic * time[roman];
      }
    } else {
      results += arabic * time[roman];
    }
 
  }
  
  return results;
  
}