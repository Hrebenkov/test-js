function checkStorage(available, ordered) {
  if (available<ordered) {
    return (`Your order is too large, there are not enough items in stock!`)
    
  }
  else if (ordered === 0) {
	  return (`There are no products in the order!`)
 }
  else {
	  return (`The order is accepted, our manager will contact you`)
  }

}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));
console.log(checkStorage(80, 80));