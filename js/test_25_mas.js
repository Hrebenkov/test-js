function getSlice(array, value) {

	const index = array.indexOf(value);

  if (index === -1) {
    return []; 
  } else {
    return array.slice(0, index + 1);
  }
}

console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));





