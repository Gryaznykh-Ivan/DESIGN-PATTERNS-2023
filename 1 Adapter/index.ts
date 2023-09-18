interface IGame {
  Brosok(): number;
}

class Kost implements IGame {
  Brosok(): number {
    // Случайное число от 1 до 6.
    const res: number = Math.floor(Math.random() * 6) + 1;
    return res;
  }
}

class Gamer {
  public Name: string;

  constructor(name: string) {
    this.Name = name;
  }

  SeansGame(ig: IGame): number {
    return ig.Brosok();
  }

  toString(): string {
    return this.Name;
  }
}

class Monet {
  BrosokM(): number {
    // Случайное число 1 или 2.
    const res: number = Math.floor(Math.random() * 2) + 1;
    return res;
  }
}

class AdapterGame implements IGame {
  private mot: Monet;

  constructor(mt: Monet) {
    this.mot = mt;
  }

  Brosok(): number {
    return this.mot.BrosokM();
  }
}

const kubik: Kost = new Kost();
const g1: Gamer = new Gamer("Иван");
console.log(`Выпало очков ${g1.SeansGame(kubik)} для игрока ${g1.toString()}`);

const mon: Monet = new Monet();
const bmon: IGame = new AdapterGame(mon);
console.log(
  `Монета показала "${
    g1.SeansGame(bmon) === 1 ? "Орел" : "Решка"
  }" для игрока ${g1.toString()}`
);
