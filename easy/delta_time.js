"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(" "),
      time_1 = toSeconds(arr[0]),
      time_2 = toSeconds(arr[1]),
      diff = Math.abs(time_1 - time_2);
  
  return toHoursMinutesSeconds(diff);
}

function toSeconds(str){
  var time = str.split(":").reverse();
  return time.reduce(function(a,b,i){return a + (Math.pow(60,i) * b)},0);
}

function toHoursMinutesSeconds(secs){
  var hours = Math.floor(secs / 3600),
      minutes = Math.floor((secs % 3600) / 60),
      seconds = Math.floor(secs % 3600 % 60);
  
  return format(hours) + ":" + format(minutes) + ":" + format(seconds);
  
}

function format(s){
  var str = s.toString();
  return str.length > 1 ? str : "0" + str;
}