/**
 * Abstract Factory Pattern
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

class SUV {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
    instance = this;
  }
}

class SuvFactory {
  createSuv(type) {
    switch (type) {
      case 'cx5':
        return new Car(4, 'v6', 'grey');
      case 'sante fe':
        return new Car(4, 'v9', 'grey');
    }
  }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const autoManufacturer = (type, model) => {
  switch (type) {
    case 'car':
      return carFactory.createCar(model);
    case 'suv':
      return suvFactory.createSuv(model);
  }
};

const cx5 = autoManufacturer('suv', 'cx5');
// const mySUV = factory.createSUV('honda');

console.log(1);
console.log(cx5);
