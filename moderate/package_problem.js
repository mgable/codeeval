"use strict";
var fs  = require("fs"),contentCombinations = [];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(/\s?:\s?/),
      packageLimit = temp[0],
      items = makeItems(temp[1]),
      startItem = {index:[],
                   weight:0,
                   price: 0
                  };

  contentCombinations = [];
  
  makeCombinations(packageLimit, startItem, items);
    
  return (contentCombinations.length) ? getBest(contentCombinations).join(",") : "-";
}

function makeItems(items){
  var items = items.split(" ").map(function(v){return v.replace(/[\(\)]/g,"").split(",")})
  .map(function(v,i,a){
       var obj = {};
       obj.index = [v[0]];
       obj.weight = parseFloat(v[1],10);
       obj.price = parseInt(v[2].replace("$",""));
       
       return obj;
  });
  
  return items;
}

function makeCombinations(packageLimit, item, items){
  items.forEach(function(v,i,a){
      if (item.weight + v.weight <= packageLimit){
        var combined = combine(item,v);
        contentCombinations.push(combined);
        var removed = items.splice(i,1);
       makeCombinations(packageLimit, combined, items )
       items.splice(i,0,removed[0]);
      }

  });
}

function combine(a,b){
  var obj = {};
  obj.index = a.index.concat(b.index);
  obj.weight = a.weight + b.weight;
  obj.price = a.price + b.price;

  obj.index.sort(function(a,b){ return a - b});
  
  return obj;
}

function getBest(items){
  items.sort(function(a,b){
    if (b.price === a.price){
      return a.weight - b.weight;
    }else {
      return b.price - a.price;
    }
  });
  
  return items[0].index;
}