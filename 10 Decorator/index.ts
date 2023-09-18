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

class Renault extends AutoBase {
  constructor(name: string, description: string, costBase: number) {
    super(name, description, costBase);
  }

  getCost(): number {
    return this.costBase * 1.18;
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

class MediaNAV extends DecoratorOptions {
  constructor(auto: AutoBase, title: string) {
    super(auto, title);
    this.name = `${auto.name}. Современный`;
    this.description = `${auto.description}. ${this.title}. Обновленная мультимедийная навигационная система`;
  }

  getCost(): number {
    return this.autoProperty.getCost() + 15.99;
  }
}

class SystemSecurity extends DecoratorOptions {
  constructor(auto: AutoBase, title: string) {
    super(auto, title);
    this.name = `${auto.name}. Повышенной безопасности`;
    this.description = `${auto.description}. ${this.title}. Передние боковые подушки безопасности, ESP - система динамической стабилизации автомобиля`;
  }

  getCost(): number {
    return this.autoProperty.getCost() + 20.99;
  }
}

function print(av: AutoBase): void {
  console.log(av.toString());
}

const reno = new Renault("Рено", "Renault LOGAN Active", 499.0);
print(reno);

const myReno = new MediaNAV(reno, "Навигация");
print(myReno);

const newMyReno = new SystemSecurity(
  new MediaNAV(reno, "Навигация"),
  "Безопасность"
);
print(newMyReno);
