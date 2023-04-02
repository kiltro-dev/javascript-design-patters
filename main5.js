/**
 * Singleton Pattern
 */

let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      // return instance;
      throw new Error("You can only create one instance!");
    }
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const civic = new Car(4, 'v6', 'grey');
const honda = new Car(4, 'v9', 'grey');
// const cx5 = new SUV(4, 'v8', 'red');

console.log(civic);
console.log(honda);
// console.log(cx5);
