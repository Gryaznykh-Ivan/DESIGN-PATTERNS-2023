// @ts-ignore
import fs from "fs";

class Log {
  private static myLog: Log;

  private constructor() {}

  public static get MyLog(): Log {
    if (!Log.myLog) {
      Log.myLog = new Log();
    }
    return Log.myLog;
  }

  public logExecution(message: string): void {
    const logMessage = this.getLogMessage(message);
    fs.appendFileSync("log.txt", logMessage);
  }

  private getLogMessage(message: string): string {
    const timestamp = new Date().toLocaleString();
    return `
Log Entry: ${timestamp}
Action: ${message}
-------------------------------
`;
  }
}

class Operation {
  public static run(operationCode: string, operand: number): number {
    const lg2 = Log.MyLog;
    let result = 0;

    switch (operationCode) {
      case "+":
        result += operand;
        lg2.logExecution(`Addition ${operand}`);
        break;
      case "-":
        result -= operand;
        lg2.logExecution(`Subtraction ${operand}`);
        break;
      case "*":
        result *= operand;
        break;
      case "/":
      case ":":
        result /= operand;
        break;
    }

    return result;
  }
}

const lg = Log.MyLog;
lg.logExecution("Main Method");
let op = Operation.run("-", 35);
op = Operation.run("+", 30);
