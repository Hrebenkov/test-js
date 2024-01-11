const atTheOldToad = {
  potions: [],

  getPotions() {
    return "List of all available potions";
  },

  addPotion(potionName) {
    this.potions.push(potionName);
    return `Adding ${potionName}`;
  },
};

// Приклад використання
console.log(atTheOldToad.getPotions()); // "List of all available potions"
console.log(atTheOldToad.addPotion("Invisibility")); // "Adding Invisibility"
console.log(atTheOldToad.addPotion("Power potion")); // "Adding Power potion"