"use strict";

console.info(getPrimes(1000).reduceRight(function(f,s){
  return isPalindrome(f)? f : s;
},1));

//http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function isPalindrome(text){
  var string = text.toString();
  if (string.length < 2) return false;
	return string === string.split(/\B/).reverse().join("");
}