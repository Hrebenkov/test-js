function getSubstring(string, length) {
	return string.slice(0, length);

}

console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 5));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));