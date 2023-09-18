abstract class AutoBase {
  name: string;
  description: string;
  costBase: number;

  constructor(name: string, description: string, costBase: number) {
    this.name = name;
    this.description = description;
    this.costBase = costBase;
  }

  abstract getCost(): number;

  toString(): string {
    return `Ваш автомобиль: \n${this.name} \nОписание: ${
      this.description
    } \nСтоимость ${this.getCost()}\n`;
  }
}

class Toyota extends AutoBase {
  constructor(name: string, description: string, costBase: number) {
    super(name, description, costBase);
  }

  getCost(): number {
    return this.costBase * 1.15;
  }
}

abstract class DecoratorOptions extends AutoBase {
  protected autoProperty: AutoBase;
  title: string;

  constructor(auto: AutoBase, title: string) {
    super(auto.name, auto.description, auto.costBase);
    this.autoProperty = auto;
    this.title = title;
  }
}

class LeatherSeats extends DecoratorOptions {
  constructor(auto: AutoBase, title: string) {
    super(auto, title);
    this.name = `${auto.name}. Кожаные сиденья`;
    this.description = `${auto.description}. ${this.title}. Дополнительная опция - кожаные сиденья`;
  }

  getCost(): number {
    return this.autoProperty.getCost() + 10.0;
  }
}

class Sunroof extends DecoratorOptions {
  constructor(auto: AutoBase, title: string) {
    super(auto, title);
    this.name = `${auto.name}. Люк`;
    this.description = `${auto.description}. ${this.title}. Дополнительная опция - люк`;
  }

  getCost(): number {
    return this.autoProperty.getCost() + 5.0;
  }
}

function print(av: AutoBase): void {
  console.log(av.toString());
}

const reno = new Toyota("Toyota", "Toyota Camry", 599.0);
print(reno);

const toyotaWithLeatherSeats = new LeatherSeats(reno, "Кожаные сиденья");
print(toyotaWithLeatherSeats);

const toyotaWithSunroof = new Sunroof(reno, "Люк");
print(toyotaWithSunroof);
