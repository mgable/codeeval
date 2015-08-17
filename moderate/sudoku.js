"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(";"),
      count = temp[0],
      matrix = temp[1];
  
  return rowCheck(count,matrix) && columnCheck(count,matrix) ? "True" :"False" ; 
}

function rowCheck(count,nums){
  var isSukudo = true, matrix = nums.split(",");
  do {isSukudo = check(matrix.splice(0,count))}
  while (isSukudo && matrix.length);
  
  return isSukudo;
}

function columnCheck(count,nums){
  var isSukudo = true, matrix = nums.split(","),temp = [];
  for (var x = 0; x < count; x++){
    temp = [];
    for (var i = 0; i < count; i++){
      temp.push(matrix[x + (i * count)]);
    }
    isSukudo = check(temp);
  }
  
  return isSukudo;
}


function check(nums){
  nums.sort(function (a,b){return a-b});
  for (var x =1; x <=nums.length; x++){
    if (nums[x-1] !== x.toString(10)) {
      return false;
    }
  }
  return true; 
}