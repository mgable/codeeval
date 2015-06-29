"use strict";
var fs  = require("fs"), btree = {value:30, left: 
            {value: 8, right : {value: 20, right : {value: 29}, left: {value: 10}}, left: {value: 3}}, 
            right: {value: 52}};
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(tree(line));
    }
});

function parse(data, value){
  var found = false, current = data, parent;
  while (!found && current){
    if (value < current.value){
      parent = current;
      current = current.left;
    } else if (value > current.value){
      parent = current;
      current = current.right;
    } else {
      found = true;
    }
  }
   return (found) ? parent: false;
}

function tree(line){
 var arr = line.split(" "), answer;
 if (answer = parse(btree, parseInt(arr[0]))) {
 	return answer.value;
 }
}