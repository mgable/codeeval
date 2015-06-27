"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse (line){
  var temp = line.split(";"),
      words = temp[0].split(" "),
      order = temp[1].split(" "),
      extra = [words.pop()],
      results=[];

  words.forEach(function(item, index){
    results[(parseInt(order[index]) - 1)] = item;
  });
  
  for (var i = 0, limit = results.length; i < limit; i++){
    if (!results[i]){
      results[i] = extra.pop();
    }
  }
  
  if(extra.length){
    results.push(extra.pop());
  }
  
  return results.join(" ");
}