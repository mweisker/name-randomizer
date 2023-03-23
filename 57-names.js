const nameRandomizer = array => {
  const cache = {};
  return () => {
    let index;
    while (!index) {
      
      const randomNum = Math.floor(Math.random() * 34)
      if (!cache[randomNum]) index = randomNum;
    }
    cache[index] = index;
    return array[index];
  }
}

const group56 = ["Alex", "Anna", "Brandon", "Cameron", "Carolyn", 
            "Dom", "Eric", "Esther", "Huy", "Jake", 
            "James", "Jeffrey", "Jessica", "Jonah", "Jonathan", 
            "Joseph", "Justin", "Kirsten", "Lane", "Lenny", 
            "Lilianne", "Megan", "Michael", "Petros", "Rathna", 
            "Ryan", "Samuel", "Scott", "Shimmy", "Summer", 
            "Taylor", "Tejash", "Wesley", "Ying-an"];

const randomize = nameRandomizer(group56);

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());

console.log(randomize());
