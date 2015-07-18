"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

function parse(line){
  if (line >= 0 && line <=2) return "Still in Mama's arms";
  if (line >= 3 && line <=4) return "Preschool Maniac";
  if (line >= 5 && line <=11) return "Elementary school";
  if (line >= 12 && line <=14) return "Middle school";
  if (line >= 15 && line <=18) return "High school";
  if (line >= 19 && line <=22) return "College";
  if (line >= 23 && line <=65) return "Working for the man";
  if (line >= 26 && line <=100) return "The Golden Years";
  
  return "This program is for humans";
}