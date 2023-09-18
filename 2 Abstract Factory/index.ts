// Интерфейс для фабрики
interface CarFactory {
  createCar(): Car;
  createEngine(): Engine;
}

// Интерфейс для автомобиля
interface Car {
  name: string;
  maxSpeed(engine: Engine): number;
}

// Интерфейс для двигателя
interface Engine {
  maxSpeed: number;
}

// Класс фабрики Ford
class FordFactory implements CarFactory {
  createCar(): Car {
    return new FordCar("Форд");
  }

  createEngine(): Engine {
    return new FordEngine();
  }
}

// Класс автомобиля Ford
class FordCar implements Car {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  maxSpeed(engine: Engine): number {
    return engine.maxSpeed;
  }

  toString(): string {
    return `Автомобиль ${this.name}`;
  }
}

// Класс двигателя Ford
class FordEngine implements Engine {
  maxSpeed: number;

  constructor() {
    this.maxSpeed = 220;
  }
}

// Класс Client
class Client {
  private car: Car;
  private engine: Engine;

  constructor(factory: CarFactory) {
    this.car = factory.createCar();
    this.engine = factory.createEngine();
  }

  runMaxSpeed(): number {
    return this.car.maxSpeed(this.engine);
  }

  toString(): string {
    return this.car.toString();
  }
}


const fordCarFactory = new FordFactory();
const client = new Client(fordCarFactory);
console.log(
  `Максимальная скорость ${client.toString()} составляет ${client.runMaxSpeed()} км/час`
);
