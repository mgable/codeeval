"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(parse(line));
    }
});

//https://www.facebook.com/notes/facebook-hacker-cup/qualification-round-solutions/598486173500621
/*
The idea is to keep track of the possible range of open parentheses.
We use two values, 'minOpen' and 'maxOpen'. Initialize both of these to 0.
Iterate over the message, character by character.
Whenever you encounter a '(', you increment maxOpen, and if it wasn't part of a smiley, you also increment minOpen.
Whenever you encounter a ')', you decrement minOpen, and if it wasn't part of a frowny face, decrement maxOpen. If minOpen is negative, reset it to 0.
 
 
If maxOpen ever was negative, or minOpen isn't 0, it wasn't possible that the message had balanced parentheses. Otherwise it was possible.
*/

/* I had a very hard time with this one and do not consider that I solved it. It was deleted from code eval. I will try and solve it using a different algorthm, even the one above which I translated into javascript is still confusing. */

function parse(line){
  var temp = line.split(""),
      minOpen = 0,
      maxOpen = 0;
  
  var results = temp.every(function(v,i,a){
    if (/\(/.test(v)){
      maxOpen++;
      if(!isOptional(a[i-1])){
        minOpen++;
      }
    }else if (/\)/.test(v)){
      minOpen--;
      if(!isOptional(a[i-1])){
        maxOpen--;
      }
    }
    
    if (minOpen < 0) { minOpen = 0;}
                     
    return (maxOpen >= 0);
  });
  
  return  (minOpen === 0 && results) ? "YES" : "NO"; 
}

function isOptional(str){
  //console.info(str);
  return (str === ":") ? true : false;
}

