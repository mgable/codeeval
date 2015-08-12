"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(";"),
      uri_1 = arr[0],
      uri_2 = arr[1],
      re = /\b(https?):\/{2}([^:/]*)(?:\:(\d*))?(\/.*)?/i,
      uri_1_parts = uri_1.match(re),
      uri_2_parts = uri_2.match(re);

  return isEqual(uri_1_parts, uri_2_parts) ? "True" : "False";
  
}

function isEqual(obj_1, obj_2){
  var result = false;
  // protocal
  if (obj_1[1].toLowerCase() === obj_2[1].toLowerCase()){
    // domain
    if (obj_1[2].toLowerCase() === obj_2[2].toLowerCase()){
      // port
      if (arePortsEqual(obj_1[3],obj_2[3])){
        // path
        if (decode(obj_1[4]) === decode(obj_2[4])){
          result = true;
        }
      }
    }
  }
  
  return result;
}

function decode(p){
  try {
    return decodeURIComponent(p);
  }
  catch(e){
    return p;
  }
}

function arePortsEqual(p1, p2){
  var result = false;
  if (!p1){
    p1 = "80";
  }
  
  if (!p2){
    p2 = "80";
  }
  
  if (p1 === p2){
    result = true;
  }

  return result;
}