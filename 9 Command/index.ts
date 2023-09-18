abstract class Command {
  protected unit: ArithmeticUnit;
  protected operand: number;

  constructor(unit: ArithmeticUnit, operand: number) {
    this.unit = unit;
    this.operand = operand;
  }

  abstract execute(): void;
  abstract unExecute(): void;
}

class ArithmeticUnit {
  private register: number = 0;

  get Register(): number {
    return this.register;
  }

  run(operationCode: string, operand: number): void {
    switch (operationCode) {
      case "+":
        this.register += operand;
        break;
      case "-":
        this.register -= operand;
        break;
      case "*":
        this.register *= operand;
        break;
      case "/":
        this.register /= operand;
        break;
    }
  }
}

class ControlUnit {
  private commands: Command[] = [];
  private current: number = 0;

  storeCommand(command: Command): void {
    this.commands.push(command);
  }

  executeCommand(): void {
    this.commands[this.current].execute();
    this.current++;
  }

  undo(): void {
    this.commands[this.current - 1].unExecute();
  }

  redo(): void {
    this.commands[this.current - 1].execute();
  }
}

class Add extends Command {
  constructor(unit: ArithmeticUnit, operand: number) {
    super(unit, operand);
  }

  execute(): void {
    this.unit.run("+", this.operand);
  }

  unExecute(): void {
    this.unit.run("-", this.operand);
  }
}

class Calculator {
  private arithmeticUnit: ArithmeticUnit;
  private controlUnit: ControlUnit;

  constructor() {
    this.arithmeticUnit = new ArithmeticUnit();
    this.controlUnit = new ControlUnit();
  }

  private run(command: Command): number {
    this.controlUnit.storeCommand(command);
    this.controlUnit.executeCommand();
    return this.arithmeticUnit.Register;
  }

  add(operand: number): number {
    return this.run(new Add(this.arithmeticUnit, operand));
  }

  redo(): number {
    this.controlUnit.redo();
    return this.arithmeticUnit.Register;
  }

  undo(): number {
    this.controlUnit.undo();
    return this.arithmeticUnit.Register;
  }
}

const calculator = new Calculator();
let result = 0;
result = calculator.add(5);
console.log(result);
result = calculator.add(4);
console.log(result);
result = calculator.add(3);
console.log(result);
result = calculator.redo();
console.log(result);
result = calculator.undo();
console.log(result);
