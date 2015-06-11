"use strict";

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(lowestUniqueNumber(line));
    }
});

function lowestUniqueNumber(line){
	for (var x = 1, limit = 10; x < limit; x++){
		var regex = new RegExp (x.toString(),"g"),
			matches = line.match(regex);

	    if (matches && matches.length === 1) {
	      return x - 1;
	    }
	}
	return 0;
}