"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

var data = "4-2;BEGIN-3;3-4;2-END";
//var data = "4-2;BEGIN-3;3-4;2-3"; //# BAD
//var data = "BEGIN-3;4-3;3-4;2-END"; // # BAD
//var data = "77-END;BEGIN-8;8-77;11-11"; // # BAD

console.info(parse(data));

var arr = [];
function parse(line){
  arr = line.split(";").map(function(v,i,a){
    var temp = v.split("-"),
        name = temp[0],
        link = temp[1];
    return {name: name, link:link, visited:false};
  });


  return traverse () && allLinksVisited() ? "GOOD" : "BAD";
}

function traverse(){
  var pointer = "BEGIN";
  while(pointer && hasNext(pointer)){
    var nextObj = next(pointer);
    pointer = nextObj.link;
    if (nextObj.visited) {return false;}
    nextObj.visited = true;
  }

  return (nextObj.link === "END") ? true : false;

}

function allLinksVisited(){
  for (var x = 0; x < arr.length; x++){
    if(!arr[x].visited) return false;
  }
  return true;
}

function hasNext(type){
  for (var x = 0; x < arr.length; x++){
    if (arr[x].name === type) {
      return true;
    }
  }
  return false;
}

function next(type){
  for (var x = 0; x < arr.length; x++){
    if (arr[x].name === type) {
      return arr[x];
    }
  }
  
  return null;
}