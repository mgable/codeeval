"use strict";

function sumprimes(howmany) {
	var sum = 0, count = 0, number = 2, i, isPrime;

	while (count < howmany){
		isPrime = true;
		for (i = 2; i < number; i = i + 1){
			if (number % i === 0){
				isPrime = false;
				break;
			}
		}
		if (isPrime) {
			sum = sum + number;
			count++;
		}

		number++;
	}
	return sum;

};

console.log(sumprimes(1000));