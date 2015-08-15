"use strict";
var fs  = require("fs");

var example1 = "rbc vjnmkf kd yxyqci na rbc zjkfoscdd ew rbc ujllmcptc rbkso rbyr ejp mysljylc kd kxveddknmc re jsicpdryside kr kd eoya kw aej icfkici re zjkr;the public is amazed by the quickness of the juggler",
	example2 = "tc rbkso rbyr ejp mysljylc kd kxveddknmc re jsicpdrysi;we think that our language is impossible to understand",
	map = makeMap(example1, {});

map = makeMap(example2, map);
map = swap(map);

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function makeMap(line, obj){
  var temp = line.split(";"),
      coded = temp[0].split(""),
      translated = temp[1].split("");
  
  translated.forEach(function(v,i,a){
    obj[v] = coded[i];
  });
  
  return obj;
}

function parse(line){
  return line.split("").map(function(v,i,a){
    return map[v];
  }).join("");
}

function swap(obj){
  var source = obj, dest= {};
  
  for(var prop in source){
     dest[source[prop]] = prop;
  }
  return dest;
}