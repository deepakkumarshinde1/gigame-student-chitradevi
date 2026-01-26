class Animal {
  constructor(name, legs) {
    this.legs = legs;
    this.animalName = name;
  }

  running() {
    console.log(this.animalName + " is running");
    console.log(this.animalName + " has " + this.legs + " legs");
  }
}

// class
class Human extends Animal {
  constructor(name, legs) {
    super(name, legs);
  }
}

let human = new Human("Deepakkumar", 2);
human.running();
// Deepakkumar is running
// Deepakkumar has 2 legs

let cat = new Animal("Cat", 4);
cat.running();
// Cat is running
// Cat has 4 legs

let dog = new Animal("Dog", 4);
dog.running(); // Dog is running
// Dog has 4 legs

class Shape {
  static create(name) {
    return new Shape(name);
  }
}

let circle = Shape.create("circle");

Date.now(); // static method
Math.random(); // static method
