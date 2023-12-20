const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

// Перебір об'єкта за допомогою циклу for...in
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);   // ["descr", "rating", "price"]
console.log(values); 