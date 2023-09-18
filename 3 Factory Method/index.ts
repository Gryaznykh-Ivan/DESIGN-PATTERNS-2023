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

class Shipping extends TransportService {
  public tariff: number;

  constructor(name: string, tariff: number) {
    super(name);
    this.tariff = tariff;
  }

  costTransportation(distance: number): number {
    return distance * this.tariff;
  }

  toString(): string {
    return `Фирма ${this.name}, доставка по тарифу ${this.tariff}`;
  }
}

class TaxiTransCom extends TransportCompany {
  constructor(name: string) {
    super(name);
  }

  create(name: string, category: number): TransportService {
    return new TaxiServices(this.name, category);
  }
}

class ShipTransCom extends TransportCompany {
  constructor(name: string) {
    super(name);
  }

  create(name: string, tariff: number): TransportService {
    return new Shipping(this.name, tariff);
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
const taxiService = taxiCompany.create("Такси", 1);
const taxiDistance = 15.5;
print(taxiService, taxiDistance);

// Создаем услугу грузоперевозки
const shipCompany = new ShipTransCom("Служба перевозок");
const shipService = shipCompany.create("Грузоперевозки", 2);
const shipDistance = 150.5;
print(shipService, shipDistance);
