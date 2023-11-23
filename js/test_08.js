function normalizeInput(input, to) {
	if (to === "upper") {
		return input.toUpperCase();
    
  }
  else {
	  return input.toLowerCase();
 }
}

console.log(normalizeInput("This ISN'T SpaM", "lower"));
console.log(normalizeInput("This ISN'T SpaM", "upper"));
console.log(normalizeInput("Big SALE", "lower"));
console.log(normalizeInput("Big SALE", "upper"));
console.log(normalizeInput("Stay Awhile and Listen", "lower"));
console.log(normalizeInput("Stay Awhile and Listen", "upper"));