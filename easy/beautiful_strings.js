"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
		console.info(beautify(line));
    }
});

function beautify(str){
	var arr = str.split(""),
    sums = [],
    start = 26,
    cache = {};

  arr.forEach(function(_item_){
    var item = _item_.toLowerCase();
    if (/\w/.test(item) && !cache[item]){
      var re = new RegExp(item, "ig");
      sums.push(str.match(re).length);
      cache[item] = true;
    } 
  });

  return sums.sort().reverse().reduce(function(a,b){return a + (b * start--)},0);
}