"use strict";
var fs  = require("fs"),
	matrix = getMatrix(256,256),
	obj = {
		SetCol: SetCol,
		SetRow: SetRow,
		QueryCol: QueryCol,
		QueryRow: QueryRow
	};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        queryBoard(line);
    }
});

function queryBoard(line){
	var arr = line.split(" "),
		command = arr[0],
		arg_1 = parseInt(arr[1]),
		arg_2 = parseInt(arr[2]);

 	obj[command](arg_1, arg_2);
}

function SetCol(column, value){
	matrix.forEach(function(v,i,a){
		v[column] = value;
	});
}

function SetRow(row, value){
	matrix[row].forEach(function(v,i,a){
		a[i] = value;
	});
}

function QueryCol(column){
	var total =  matrix.map(function(item){
		return item[column];
	}).reduce(function(a,b){ return a + b; },0);

	// output
	console.info(total);
}

function QueryRow(row){
	var total = matrix[row].reduce(function(a,b){ return a + b; },0);

	// output
	console.info(total);
}

function getMatrix(rows, columns){
	var matrix = [];
	for (var x = 0, xLimit = rows; x < xLimit; x++){
		matrix[x] = [];
		for (var j = 0, jLimit = columns; j < jLimit; j++){
			matrix[x][j] = 0;
		}
	}
	return matrix;
}