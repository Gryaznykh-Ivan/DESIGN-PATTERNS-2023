abstract class Progression {
  public First: number;
  public Last: number;
  public H: number;
  public progList: number[] = [];

  constructor(first: number, last: number, h: number) {
    this.First = first;
    this.Last = last;
    this.H = h;
  }

  private Print(progList: number[]): void {
    console.log("Последовательность:");
    for (const item of progList) {
      console.log(" " + item);
    }
    console.log();
  }

  private InitializeProgression(a: number, b: number, h: number): void {
    this.First = a;
    this.Last = b;
    this.H = h;
  }

  public TemplateMethod(): void {
    this.InitializeProgression(this.First, this.Last, this.H);
    this.Progress();
    this.Print(this.progList);
  }

  public abstract Progress(): void;
}

class ArithmeticProgression extends Progression {
  constructor(first: number, last: number, h: number) {
    super(first, last, h);
  }

  public Progress(): void {
    let fF = this.First;
    do {
      this.progList.push(fF);
      fF = fF + this.H;
    } while (fF < this.Last);
  }
}

class GeometricProgression extends Progression {
  constructor(first: number, last: number, h: number) {
    super(first, last, h);
  }

  public Progress(): void {
    let current = this.First;
    while (current <= this.Last) {
      this.progList.push(current);
      current = current * this.H;
    }
  }
}

const f = 2;
const l = 32;
const step = 2;

const arithmeticProgression = new ArithmeticProgression(f, l, step);
const geometricProgression = new GeometricProgression(f, l, step);

console.log("Арифметическая прогрессия:");
arithmeticProgression.TemplateMethod();

console.log("Геометрическая прогрессия:");
geometricProgression.TemplateMethod();