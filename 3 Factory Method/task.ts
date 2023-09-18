abstract class TransportService {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract costTransportation(distance: number): number;
}

abstract class TransportCompany {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract create(name: string, param: number): TransportService;
}

class TaxiServices extends TransportService {
  public category: number;

  constructor(name: string, category: number) {
    super(name);
    this.category = category;
  }

  costTransportation(distance: number): number {
    return distance * this.category;
  }

  toString(): string {
    return `Фирма ${this.name}, поездка категории ${this.category}`;
  }
}

class LoaderServices extends TransportService {
  public category: number;

  constructor(name: string, category: number) {
    super(name);
    this.category = category;
  }

  costTransportation(distance: number): number {
    return distance * this.category;
  }

  toString(): string {
    return `Фирма ${this.name}, доставка до двери по тарифу ${this.category}`;
  }
}

class TaxiTransCom extends TransportCompany {
  constructor(name: string) {
    super(name);
  }

  create(name: string, category: number): TransportService {
    if (name === "Такси") {
        return new TaxiServices(this.name, category);
      } else if (name === "Доставка грузов до двери") {
        return new LoaderServices(this.name, category);
      } else {
        throw new Error(`Неверное имя услуги: ${name}`);
      }
  }
}


function print(comp: TransportService, distance: number): void {
  console.log(
    `Компания ${comp.toString()}, расстояние ${distance}, стоимость: ${comp.costTransportation(
      distance
    )}`
  );
}

// Создаем услугу такси
const taxiCompany = new TaxiTransCom("Служба такси");
const loaderService = taxiCompany.create("Доставка грузов до двери", 1);
const taxiDistance = 15.5;
print(loaderService, taxiDistance);
