"use strict";
var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var openList = [], currentOpen, myArray = [], isValid = true, myRe = /[\(\)\{\}\[\]]/g;
  while ((myArray = myRe.exec(line)) !== null) {
    var msg = 'Found ' + myArray[0] + '. ';
    msg += 'Next match starts at ' + myRe.lastIndex;
    
    if (isOpen(myArray[0])){
      if (currentOpen){
        openList.push(currentOpen);
      } else {
        openList.push(myArray[0]);
      }
      currentOpen =  myArray[0];
    } else {
      if (isMatch(currentOpen, myArray[0])){
        currentOpen = openList.pop();
      } else if (openList.length === 0){
        isValid = false;
        break;
      } else {
        isValid = false;
        break;
      }
    }
    
  }
  return isValid && openList.length === 0? "True" : "False";
}

function isOpen(type){
  return /[\(\{\[]/.test(type);
}

function isMatch(open,close){
  if(open === "("){
    return close === ")";
  } else if (open === "["){
    return close === "]";
  } else if(open === "{"){
    return close === "}";
  }
  else {return false}
}