/**
 * Factory Pattern
 */

let instance = null;

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
    instance = this;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'civic':
        return new Car(4, 'v6', 'grey');
      case 'honda':
        return new Car(4, 'v9', 'grey');
    }
  }
}

const carFactory = new CarFactory();
const myHonda = carFactory.createCar('honda');

console.log(myHonda);
