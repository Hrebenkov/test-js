function checkStorage(storage, item) {
  const lowerCaseItem = item.toLowerCase(); // Перетворення назви товару у нижній регістр

  if (storage.includes(lowerCaseItem)) {
    return `${item.toLowerCase()} is available to order!`;
  } else {
    return "Sorry! We are out of stock!";
  }
}
console.log(checkStorage(["apple", "plum", "pear"], "plum")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pLuM")); // "plum is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pear")); // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "pEAr")); // "pear is available to order!"
console.log(checkStorage(["apple", "plum", "pear"], "orange")); // "Sorry! We are out of stock!"
console.log(checkStorage(["apple", "plum", "pear"], "carrot")); // "Sorry! We are out of stock!"