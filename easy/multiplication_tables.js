function makeMatrix(){
  var matrix = [];
  for (var row = 0, rlimit = 12; row < rlimit; row++){
    var data = [];
    for(var column = 0, climit = 12; column < climit; column++){
      data[column] = (row + 1) * (column + 1); 
    }
    matrix.push(data);
  }
  return matrix;
}

function format(array){
  var str = "";
  array.forEach(function(row,i,a){
    row.forEach(function(column, i, a){
      str += (i === 0 ? "" : leading(column)) + column;
    });
    str += "\n";
  });
  return str;
}


function leading(num){
  var str = "";
  for(var i = 0, limit = 4 - num.toString().length; i < limit; i++){
    str += " ";
  }
  return str;
}

console.log(format(makeMatrix()));