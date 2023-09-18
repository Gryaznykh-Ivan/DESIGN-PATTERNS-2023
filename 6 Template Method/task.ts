// Абстрактный базовый класс для создания фигур
abstract class ShapeCreator {
  // Шаблонный метод для создания фигуры
  createShape(): void {
    this.drawOutline(); // Шаг 1: Рисуем контур
    this.fillColor();   // Шаг 2: Заполняем цветом
    this.display();     // Шаг 3: Отображаем фигуру
  }

  // Абстрактные методы, которые должны быть реализованы в подклассах
  abstract drawOutline(): void;
  abstract fillColor(): void;
  abstract display(): void;
}

// Конкретный класс для создания круга
class CircleCreator extends ShapeCreator {
  drawOutline(): void {
    console.log("+ Рисуем контур круга");
  }

  fillColor(): void {
    console.log("+ Заполняем круг цветом");
  }

  display(): void {
    console.log("+ Отображаем круг");
  }
}

// Конкретный класс для создания прямоугольника
class RectangleCreator extends ShapeCreator {
  drawOutline(): void {
    console.log("+ Рисуем контур прямоугольника");
  }

  fillColor(): void {
    console.log("+ Заполняем прямоугольник цветом");
  }

  display(): void {
    console.log("+ Отображаем прямоугольник");
  }
}

// Пример использования
const circleCreator = new CircleCreator();
const rectangleCreator = new RectangleCreator();

console.log("Создание круга:");
circleCreator.createShape();

console.log("\nСоздание прямоугольника:");
rectangleCreator.createShape();