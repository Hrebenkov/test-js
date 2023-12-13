function createArrayOfNumbers(min, max) {
	const tags = [];
	for (let i = min; i <= max; i += 1) {
		tags.push(`${i}`);
	}
	return tags;
}

	console.log(createArrayOfNumbers(1, 3));
	console.log(createArrayOfNumbers(14, 17));
	console.log(createArrayOfNumbers(29, 34));


