const nameRandomizer = array => {
  const cache = {};
  return () => {
    let index;
    while (!index) {
      
      const randomNum = Math.floor(Math.random() * 35)
      if (!cache[randomNum]) index = randomNum;
    }
    cache[index] = index;
    return array[index];
  }
}

const group56 = ["Alex", "Anna", "Brian", "Christopher L", "Christopher S", 
            "Clark", "Cole", "Daniel", "David K", "David N", 
            "Derrick", "Eileen", "Erika", "Felipe", "Fred", 
            "Jamie", "Jason", "Joan", "Jonathan", "Joyce", 
            "Katrina", "Matthew F", "Matt K", "Melissa", "Mike", 
            "Michael", "Michelle", "Nancy", "Nathan", "Nattie", 
            "Patricia", "Raymond", "Ryan", "Samuel", "Tricia"];

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

console.log(randomize());


