"use strict";
var fs  = require("fs");
Chain.prototype.traverse = traverse;
Chain.prototype.allLinksVisited = allLinksVisited;
Chain.prototype.hasNext = hasNext;
Chain.prototype.next = next;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split(";").map(function(v,i,a){
    var temp = v.split("-"),
        name = temp[0],
        link = temp[1];
    return {name: name, link:link, visited:false};
  });

  var chain = new Chain(arr);
  
  return chain.traverse() && chain.allLinksVisited() ? "GOOD" : "BAD";
}

function Chain(data){
  this.data = data;
}

function traverse(){
  var pointer = "BEGIN";
  while(pointer && this.hasNext(pointer)){
    var nextObj = this.next(pointer);
    pointer = nextObj.link;
    if (nextObj.visited) {return false;}
    nextObj.visited = true;
  }

  return (nextObj.link === "END") ? true : false;

}

function allLinksVisited(){
  for (var x = 0; x < this.data.length; x++){
    if(!this.data[x].visited) return false;
  }
  return true;
}

function hasNext(type){
  for (var x = 0; x < this.data.length; x++){
    if (this.data[x].name === type) {
      return true;
    }
  }
  return false;
}

function next(type){
  for (var x = 0; x < this.data.length; x++){
    if (this.data[x].name === type) {
      return this.data[x];
    }
  }
  return null;
}