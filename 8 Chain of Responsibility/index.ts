class Receiver {
  // банковские переводы
  public bankTransfer: boolean;

  // денежные переводы - WesternUnion, Unistream
  public moneyTransfer: boolean;

  // перевод через PayPal
  public payPalTransfer: boolean;

  constructor(bt: boolean, mt: boolean, ppt: boolean) {
    this.bankTransfer = bt;
    this.moneyTransfer = mt;
    this.payPalTransfer = ppt;
  }
}

abstract class PaymentHandler {
  public successor: PaymentHandler | null = null;

  abstract handle(receiver: Receiver): void;
}

class BankPaymentHandler extends PaymentHandler {
  handle(receiver: Receiver): void {
    if (receiver.bankTransfer === true) {
      console.log("Выполняем банковский перевод");
    } else if (this.successor !== null) {
      this.successor.handle(receiver);
    }
  }
}

class MoneyPaymentHandler extends PaymentHandler {
  handle(receiver: Receiver): void {
    if (receiver.moneyTransfer === true) {
      console.log("Выполняем перевод через системы денежных переводов");
    } else if (this.successor !== null) {
      this.successor.handle(receiver);
    }
  }
}

class PayPalPaymentHandler extends PaymentHandler {
  handle(receiver: Receiver): void {
    if (receiver.payPalTransfer == true) {
      console.log("Выполняем перевод через PayPal");
    } else if (this.successor !== null) {
      this.successor.handle(receiver);
    }
  }
}


const receiver = new Receiver(false, true, true);

const bankPaymentHandler = new BankPaymentHandler();
const moneyPaymentHandler = new MoneyPaymentHandler();
const paypalPaymentHandler = new PayPalPaymentHandler();

bankPaymentHandler.successor = paypalPaymentHandler;
paypalPaymentHandler.successor = moneyPaymentHandler;

bankPaymentHandler.handle(receiver);
