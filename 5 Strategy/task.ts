class BaseNavigator {
  private navigationStrategy: NavigationStrategy;

  constructor(navigationStrategy: NavigationStrategy) {
    this.navigationStrategy = navigationStrategy;
  }

  public setNavigationStrategy(strategy: NavigationStrategy): void {
    this.navigationStrategy = strategy;
  }

  public navigate(): void {
    this.navigationStrategy.navigate();
  }
}

interface NavigationStrategy {
  navigate(): void;
}

class RoadNavigation implements NavigationStrategy {
  navigate(): void {
    // Реализация навигации по автодорогам
  }
}

class WalkingNavigation implements NavigationStrategy {
  navigate(): void {
    // Реализация пешей навигации
  }
}

class SightseeingNavigation implements NavigationStrategy {
  navigate(): void {
    // Реализация маршрутов посещения достопримечательностей
  }
}

const nav = new BaseNavigator(new RoadNavigation()); // По умолчанию выбрана навигация по автодорогам

// Пользователь выбирает другой тип навигации
nav.setNavigationStrategy(new WalkingNavigation());
nav.navigate(); // Выполняется навигация пешком

nav.setNavigationStrategy(new SightseeingNavigation());
nav.navigate(); // Выполняется навигация по достопримечательностям
