"use strict";
var fs  = require("fs");
var map = ["jan", "feb", "mar","apr", "may", "jun", "jul", "aug", "sep","oct","nov", "dec"];
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  var results = 0, parsedDate, month, arr = line.split("; ").map(function(v,i,a){
    return v.split("-").map(function(v2,i2,a2){
      var date = v2.split(" "),
          month = map.indexOf(date[0].toLowerCase()),
          parsedDate = new Date (parseInt(date[1]), month);
      
      return parsedDate;
    });
  }).sort(function(a,b){
      return a[0] - b[0];
  });
  
  // starts greater than last finish === no overlap
  // starts and finishes less than last finish === complete overlap
  // starts less than last finish but ends greater than last finish == some overlap

 var limit = arr.length;
 for (var i = 0; i < limit; i++){
   var months = 0,
       endDate,
       v = arr[i],
       a = arr;
    if (!v) break;
   // is it first 
   if (i > 0){
     if ( v[1] > a[i-1][1] && v[0] > a[i-1][1] ){
       //console.info("no overlap")
       months = calculateMonths(v[1], v[0]);
     } else if (v[0] <= a[i-1][1] && v[1] > a[i-1][1]){
      //console.info("partial overlap");
       endDate = a[i-1][1];
       endDate = new Date (endDate.getFullYear(), (endDate.getMonth() + 1) );
       months = calculateMonths(v[1], endDate)
     } else {
       arr.splice(i,1);
       i--;
      // console.info("complete overlap");
     }
   } else {
     //console.info("first")
     months = calculateMonths(v[1], v[0]);
   }
   
   //console.info("months: %d", months)
   results += months;
}
  
  return Math.floor(results/12);
}

function calculateMonths(end, start){
  var startDate = new Date (start.getFullYear(), start.getMonth()),
      endDate =  new Date (end.getFullYear(), end.getMonth()),
      startMonth = start.getMonth(),
      totalMonths = 0;
  do {
    totalMonths++;
    startDate =  new Date (start.getFullYear(), startMonth++);
  } while (
    startDate < endDate
  );
  
  return totalMonths;
}
