"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		console.info(beautify(line));
    }
});

function beautify(input){
  var cache = {},
      str = input.replace(/[^a-zA-Z]/gi, "").toLowerCase(),
      arr = str.replace(/./g, function(item){
        if(cache[item]) {return "";}
        cache[item] = true;
        return item;
      }).split(""),
      sums = [],
      start = 26;
  

  arr.forEach(function(item){
      var re = new RegExp(item, "g");
      sums.push(str.match(re).length);
  });

  return sums.sort(function(a,b){return a - b}).reverse().reduce(function(a,b){return a + (b * start--)},0);
}