"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(/* Function */(line));
    }
});

var data = "100 100";

// true === open

console.info(parse(data));

var a = 0, b = 0;
for (var x = 0; x < 10; x++){
  a = 1 << x;
  b += a;
}

console.info(b.toString(2))

var a = 0, b = 0;
for (var x = 0; x < 10; x++){
  a = ((x+1) % 2 === 0 ? 0 : 1) << x;
  b += a;
}
console.info(b.toString(2));


var a = 0, b = 0;
for (var x = 0; x < 10; x++){
  a = ((x+1) % 3 === 0 ? 0 : 1) << x;
  b += a;
}
console.info(b.toString(2))


//1 - on or open
//0 - off or closed