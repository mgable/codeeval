"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var temp = line.split(";"),
      count = parseInt(temp[0],10),
      matrix = temp[1];
  
  return rowCheck(count,matrix) && columnCheck(count,matrix) && groupCheck(count,matrix) ? "True" :"False" ; 
}

function rowCheck(count,nums){
  var isSukudo = true, matrix = nums.split(",");

  do {isSukudo = check(matrix.splice(0,count))}
  while (isSukudo && matrix.length);
  
  return isSukudo;
}

function columnCheck(count,nums){
  var matrix = nums.split(","),temp = [];
  for (var x = 0; x < count; x++){
    temp = [];
    for (var i = 0; i < count; i++){
      temp.push(matrix[x + (i * count)]);
    }
    if (! check(temp)) {
      return false;
    }
  }
  
  return true;
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

function groupCheck(count, nums){
  var matrix = nums.split(","),
      arrayPositions = makeGroupIndexes(count).join(",").split(","),
      results = [],
      isSukudo = true;
    
  results = arrayPositions.map(function(v,i,a){
    return matrix[v];
  });
  
  
  do {isSukudo = check(results.splice(0,count))}
  while (isSukudo && results.length);
  
  return isSukudo;
}

function makeGroupIndexes(howMany){
  var arrays = [],
      totalGroups = howMany,
      factor = Math.sqrt(totalGroups),
      currentGroup = 0,
      currentRow = 0,
      group = 0,
      cell = 0;


  while (currentRow < factor){
    // make group(array) if necessary
    if (!arrays[currentGroup]) arrays[currentGroup] = [];
    arrays[currentGroup].push(cell++);
    
    // move to the next group
    if (cell % Math.sqrt(totalGroups) === 0) {
      currentGroup++;
    }
    
    // reset group when end of subgroup row
    if (cell % totalGroups === 0){
      currentGroup = group;
    }

      // increment to new set of groups and new row
    if (cell % Math.pow(factor,3) === 0){
      group += factor;
      currentGroup = group;
      currentRow++;
    }
  }

  return arrays;
}