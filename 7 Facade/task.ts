// Класс Drive
class Drive {
  private twist: string;
  public driveevent: ((This: Drive) => void) | null = null;

  constructor() {
    this.twist = "исходная позиция";
  }

  public setTwist(value: string): void {
    this.twist = value;
    if (this.driveevent) this.driveevent(this);
  }

  public TurlLeft(): void {
    this.setTwist("Поворот налево");
  }

  public TurlRight(): void {
    this.setTwist("Поворот направо");
  }

  public Stop(): void {
    this.setTwist("Стоп");
  }

  public toString(): string {
    return `Привод: ${this.twist}`;
  }
}

// Класс Power
class Power {
  private microwavePower: number;
  public powerevent: ((This: Power) => void) | null = null;

  constructor() {
    this.microwavePower = 0;
  }

  public setMicrowavePower(value: number): void {
    this.microwavePower = value;
    if (this.powerevent) this.powerevent(this);
  }

  public toString(): string {
    return `Задана мощность ${this.microwavePower}w`;
  }
}

// Класс Notification
class NNotification {
  private messageFin: string;
  public notificationevent: ((This: NNotification) => void) | null = null;

  constructor() {
    this.messageFin = "";
  }

  public startNotification(): void {
    this.messageFin = "Операция началась";
    if (this.notificationevent) this.notificationevent(this);
  }

  public stopNotification(): void {
    this.messageFin = "Операция завершена";
    if (this.notificationevent) this.notificationevent(this);
  }

  public toString(): string {
    return `Информация: ${this.messageFin}`;
  }
}

// Класс Microwave
class Microwave {
  private drive: Drive;
  private power: Power;
  private notification: NNotification;

  constructor(drive: Drive, power: Power, notification: NNotification) {
    this.drive = drive;
    this.power = power;
    this.notification = notification;
  }

  public defrost(): void {
    this.notification.startNotification();
    this.power.setMicrowavePower(1000);
    this.drive.TurlRight();
    this.drive.TurlRight();
    this.power.setMicrowavePower(500);
    this.drive.Stop();
    this.drive.TurlLeft();
    this.drive.TurlLeft();
    this.power.setMicrowavePower(200);
    this.drive.Stop();
    this.drive.TurlRight();
    this.drive.TurlRight();
    this.drive.Stop();
    this.power.setMicrowavePower(0);
    this.notification.stopNotification();
  }

  public cookPopcorn(): void {
    this.notification.startNotification();
    this.power.setMicrowavePower(800);
    this.drive.TurlLeft();
    this.drive.TurlLeft();
    this.drive.TurlLeft();
    this.power.setMicrowavePower(0);
    this.drive.Stop();
    this.notification.stopNotification();
  }
}

// Методы-обработчики событий
function notification_notificationevent(notification: NNotification) {
  console.log(notification.toString());
}

function drive_driveevent(drive: Drive) {
  console.log(drive.toString());
}

function power_powerevent(power: Power) {
  console.log(power.toString());
}




const drive = new Drive();
const power = new Power();
const notification = new NNotification();
const microwave = new Microwave(drive, power, notification);

power.powerevent = power_powerevent;
drive.driveevent = drive_driveevent;
notification.notificationevent = notification_notificationevent;



console.log("Приготовление попкорна");
microwave.cookPopcorn();