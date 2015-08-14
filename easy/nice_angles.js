"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

// http://zonalandeducation.com/mmts/trigonometryRealms/degMinSec/degMinSec.htm
function parse (line){
  var angle = parseFloat(line,10),
      degrees = Math.floor(angle),
      fraction = angle - degrees,
      minutes_seconds = fraction * 60,
      minutes = Math.floor(minutes_seconds),
      seconds = Math.floor((minutes_seconds - minutes) * 60);
     
  return degrees + "." + format(minutes) + "'" + format(seconds) + '"';
}

function format(num){
  var temp = num.toString(10);
  return (temp.length === 1) ? "0" + temp : temp;
}