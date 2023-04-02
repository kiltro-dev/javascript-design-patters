/**
 * Constructor Pattern
 */

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(doors, engine, color) {
    super(doors, engine, color);
    this.wheels = 4;
  }
}

const civic = new Car(4, 'v6', 'grey');
const cx5 = new SUV(4, 'v8', 'red');

console.log(civic);
console.log(cx5);
