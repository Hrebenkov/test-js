function findNumber(start, end, divisor) {

	for (let i = start; i <= end; i += 1) {

	
	    if (i%divisor === 0) {
				return i;
	    }
	  }

}

console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));