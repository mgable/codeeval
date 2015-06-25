var filter = {a:0, b:1, c:2, d:3, e:4, f:5, g:6, h:7, i:8, j:9};

var data = "abcdefghik";

console.info(translate(data));

function translate(str){
  var arr = str.split(""),
      results;

  results = arr.filter(function(item){
    console.info(filter[item])
    return  (filter[item] > -1);
  }).map(function(item){
    return filter[item];
  });
  
  return results.join("");

}