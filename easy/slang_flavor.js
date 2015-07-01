"use strict";
var fs  = require("fs"), slang = [", yeah!", ", this is crazy, I tell ya.", ", can U believe this?",", eh?", ", aw yea.",", yo.", "? No way!", ". Awesome!"],
	re = /[\.\?\!]/g,
	count = 0,
    match;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(data){
  var str = data.replace(re, function(item){
    return  (count++ % 2 == 1) ? slang.shift() : item;
  });
  return str;
}