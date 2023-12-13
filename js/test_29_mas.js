function calculateTotalPrice(order) {
  if (!order || order.length === 0) {
    return 0;
  }

  const totalPrice = order.reduce((acc, value) => acc + value, 0);
  return totalPrice;
}

// Приклади використання
console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// Виклик функції calculateTotalPrice() з випадковим масивом
const randomArray = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
console.log(calculateTotalPrice(randomArray));