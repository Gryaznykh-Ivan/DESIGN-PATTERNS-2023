// Интерфейс для класса датчика температуры в Фаренгейтах.
interface IFahrenheitTemperatureSensor {
  getTemperatureInFahrenheit(): number;
}

// Класс датчика температуры в Фаренгейтах.
class FahrenheitTemperatureSensor implements IFahrenheitTemperatureSensor {
  private temperatureInFahrenheit: number;

  constructor(temperature: number) {
    this.temperatureInFahrenheit = temperature;
  }

  getTemperatureInFahrenheit(): number {
    return this.temperatureInFahrenheit;
  }
}

// Интерфейс для класса адаптера, преобразующего температуру в градусах Фаренгейта в градусы Цельсия.
interface ICelsiusTemperatureSensor {
  getTemperatureInCelsius(): number;
}

// Класс адаптера для преобразования температуры из градусов Фаренгейта в градусы Цельсия.
class CelsiusTemperatureAdapter implements ICelsiusTemperatureSensor {
  private fahrenheitSensor: IFahrenheitTemperatureSensor;

  constructor(fahrenheitSensor: IFahrenheitTemperatureSensor) {
    this.fahrenheitSensor = fahrenheitSensor;
  }

  getTemperatureInCelsius(): number {
    // Преобразование температуры из Фаренгейта в Цельсии.
    const temperatureInFahrenheit =
      this.fahrenheitSensor.getTemperatureInFahrenheit();
    const temperatureInCelsius = ((temperatureInFahrenheit - 32) * 5) / 9;
    return temperatureInCelsius;
  }
}

const fahrenheitSensor = new FahrenheitTemperatureSensor(70);
const celsiusAdapter = new CelsiusTemperatureAdapter(fahrenheitSensor);

const temperatureInCelsius = celsiusAdapter.getTemperatureInCelsius();

console.log(
  `Температура в градусах Цельсия: ${temperatureInCelsius.toFixed(2)}°C`
);
