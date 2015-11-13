"use strict";
var fs  = require("fs"),
	key = {"Vampires": 3, "Zombies": 4, "Witches": 5};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});


function parse(line){
  var data = line.split(/,\s?/).map(function(v,i,a){ 
    var monsterData = v.split(/:\s?/),
        monster = {};
    monster[monsterData[0]] = monsterData[1];
    return monster;}),
      houseCount = data.pop().Houses,
      children = 0,
      results = data.reduce(function(a,b){
    for (var monster in b){
      children += parseInt(b[monster],10);
      return a + (key[monster] * b[monster] * houseCount);
    }
  },0);
  
  //console.info("there are " + children + " children");
  
  return Math.floor(results/children);
}
