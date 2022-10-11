// // W2D2: Classes Homework

// //You will be working with this class
// // class Cat {}
// // give the class at least 3 properties
// // give the class at least 3 methods
// // create two instances of the class (two cats)
// // log both instances to see their properties
// // invoke each method from both instances

// class Cat {
//   constructor(name, color, weightInLbs) {
//     this.name = name;
//     this.color = color;
//     this.weightInLbs = weightInLbs;
//   }
//   purring() {
//     this.isPurring = true;
//     console.log(`${this.name} is purring`);
//   }
//   sleeping() {
//     this.isSleeping = true;
//     console.log(`${this.name} is sleeping`);
//   }
//   eating() {
//     this.isEating = true;
//     console.log(`${this.name} is eating`);
//   }
// }

// let riffRaff = new Cat("RiffRaff", "orange", 15);
// let heathCliff = new Cat("HeathCliff", "orange", 20);

// console.log(riffRaff, heathCliff);

// //terminal printed: Cat { name: 'RiffRaff', color: 'orange', weightInLbs: 15 } Cat { name: 'HeathCliff', color: 'orange', weightInLbs: 20 }

// riffRaff.purring();
// riffRaff.sleeping();
// riffRaff.eating();

// // prints:
// // RiffRaff is purring
// // RiffRaff is sleeping
// // RiffRaff is eating

// heathCliff.purring();
// heathCliff.sleeping();
// heathCliff.eating();

// //prints:
// //HeathCliff is purring
// //HeathCliff is sleeping
// //HeathCliff is eating

//===============PART 2 Constructors================
//Constructors
//here is a class to work with
// class Pirate {
//   constructor(){
//   }
// }
// create 3 properties that are set by the constructor
// create 3 methods
// instantiate 2 arraysof 3 pirates, name the arrays after your favorite pirate ships, jollyRoger and blackPearl
// loop over each array and print 3 properties of each pirate

class Pirate {
  constructor(name, drinkOfChoice, favoriteBooty) {
    this.name = name;
    this.drink = drinkOfChoice;
    this.booty = favoriteBooty;
  }
  partying() {
    this.isPartying = true;
    console.log(`${this.name} is partying with his ${this.drink}`);
  }
  fighting() {
    this.isFighting = true;
    console.log(`${this.name} is sword fighting`);
  }
  spending() {
    this.isSpending = true;
    console.log(`${this.name} is spending his ${this.booty} on a new ship`);
  }
}

const jollyRoger = [
  new Pirate("Uncle Aargh", "rum", "gold"),
  new Pirate("Roy", "bourbon", "spices"),
  new Pirate("Captain Jack", "ale", "jewels"),
];

const blackPearl = [
  new Pirate("Jilly Eyes", "grog", "silver"),
  new Pirate("Salty Sarah", "gin", "sugar"),
  new Pirate("Captain Sandy", "boo-tea", "weaponry"),
];

//testing previous code thus far
// jollyRoger[0].spending();
// console.log(jollyRoger);

// loop over each array and print 3 properties of each pirate

for (let i = 0; i < jollyRoger.length; i++) {
  console.log(jollyRoger[i]);
}

for (let i = 0; i, i < blackPearl.length; i++) {
  console.log(blackPearl[i]);
}
