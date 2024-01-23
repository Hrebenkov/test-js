const changeEven = (numbers, value) => {
	const newArray = [];
	numbers.forEach(element => {
	
		if (element % 2 === 0) {
			newArray.push(element + value);
		} else {
			newArray.push(element);
		}
});
	return newArray;


}


console.log(changeEven([1, 2, 3, 4, 5], 10));
console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
console.log(changeEven([17, 24, 68, 31, 42], 100));
console.log(changeEven([44, 13, 81, 92, 36, 54], 100));