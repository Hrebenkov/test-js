function isNumberInRange(start, end, number) {
	return(number >= start && number <= end);



}

console.log(Boolean(isNumberInRange(10, 30, 17)));
console.log(Boolean(isNumberInRange(10, 30, 5)));
console.log(Boolean(isNumberInRange(20, 50, 24)));
console.log(Boolean(isNumberInRange(20, 50, 76)));