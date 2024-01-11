function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const propValues = [];

  for (const product of products) {
    // Перевіряємо, чи існує властивість з ім'ям propName
    if (product.hasOwnProperty(propName)) {
      // Додаємо значення властивості до масиву
      propValues.push(product[propName]);
    }
  }

  return propValues;
}

// Приклад використання
console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
console.log(getAllPropValues("category")); // [] - властивості "category" немає в жодному об'єкті