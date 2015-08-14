"use strict";
var fs  = require("fs"),
	perms = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var arr = line.split("");
  perms = [];
  perm (arr, []);
  return (perms.sort().join(","));
}


function perm(source, ret){
  if (source.length === 0){
    perms.push(ret.join(""));
    return;
  }
  
  for (var x = 0; x < source.length; x++){
   var item = source.splice(x,1);
   ret.push(item);
   perm (source, ret);
   ret.pop();
   source.splice(x,0,item);
  }
}