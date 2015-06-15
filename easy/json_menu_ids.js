"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        console.info(jsonMenuIds(line));
    }
});

function jsonMenuIds(line){
	var obj = JSON.parse(line),
		items = (obj && obj.menu && obj.menu.items) || false;

	return items.reduce(function(a,b){
		if (b && b.label){
			return a + parseInt(b.id);
		} else {
			return a;
		}
	}, 0);
}