// W2D2: Classes Homework

//You will be working with this class
// class Cat {}
// give the class at least 3 properties
// give the class at least 3 methods
// create two instances of the class (two cats)
// log both instances to see their properties
// invoke each method from both instances

class Cat {
  constructor(name, color, weightInLbs) {
    this.name = name;
    this.color = color;
    this.weightInLbs = weightInLbs;
  }
  purring() {
    this.isPurring = true;
    console.log(`${this.name} is purring`);
  }
  sleeping() {
    this.isSleeping = true;
    console.log(`${this.name} is sleeping`);
  }
  eating() {
    this.isEating = true;
    console.log(`${this.name} is eating`);
  }
}

let riffRaff = new Cat("RiffRaff", "orange", 15);
let heathCliff = new Cat("HeathCliff", "orange", 20);

console.log(riffRaff, heathCliff);

//terminal printed: Cat { name: 'RiffRaff', color: 'orange', weightInLbs: 15 } Cat { name: 'HeathCliff', color: 'orange', weightInLbs: 20 }

riffRaff.purring();
riffRaff.sleeping();
riffRaff.eating();

// prints:
// RiffRaff is purring
// RiffRaff is sleeping
// RiffRaff is eating

heathCliff.purring();
heathCliff.sleeping();
heathCliff.eating();

//prints:
//HeathCliff is purring
//HeathCliff is sleeping
//HeathCliff is eating
