"use strict";
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
		if (line !== "") {
				console.info(parse(line));
		}
});

/* a sequence of n > 0 integers is called a jolly jumper if the absolute values of the difference between successive elements take on all the values 1 through n-1.
so the sequence [4,1,2,4] has absolute differences [3,1,2] which is equivalent to the set [1,2,3] (1 to n-1 where n is the length of original sequence) so it is therefore a jolly jumper.
http://programming.nullanswer.com/question/24062931
*/
function parse(line){
	var list = line.split(" ").map(function(v,i,a){
		return parseInt(v,10);
	}),
			last = list.length - 2,
			jolly = [];
	
	// this is for some weird codeeval thingy. look at the examples in .txt
	var bug = list.shift();
	
	list.forEach(function(v,i,a){
		if (i < last){
			jolly.push(Math.abs(v - a[i+1]));
		}
	});

	// very strange indeed
	jolly.push(bug);
	
	jolly.sort(function(a,b){return a-b});
	
	return isJolly(list,jolly) ? "Jolly" : "Not jolly";

}

function isJolly(total, nums){
	var count = total.length;
	if (nums.length !== count){
		return false;
	}
	
	for (var x = 0; x < count; x++){
		if (nums[x] !== (x+1)) {
			return false;
		}
	}
	
	return true;
}