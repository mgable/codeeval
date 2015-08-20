"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

var data = "soup,sugar,peas,rice";
var chains = [];

console.info(parse(data));

function parse(line){
  var arr = line.split(","),
      target,
      count = 0;
  
  for (var x = 0; x < arr.length; x++){
    target = arr.splice(x,1)[0];
    console.info("the target is " + target);
    var container = [];
    linked(target, arr.slice(0),container);
    chains.push(container);
    arr.splice(x,0,target);
  }
    
  return chains;
}


function linked(target, arr, container){
  
  var lastChar = target.match(/\w$/)[0];
  
  if (arr.length == 0){
    container.push(target);
  } else {
  
    console.info(target, arr, lastChar);
    for (var x = 0; x < arr.length; x++){
      var firstChar = arr[x].match(/^\w/)[0];
      if (lastChar === firstChar){
        container.push(target);
        linked(arr.splice(x,1)[0], arr, container);
      }
    }
  }
}

