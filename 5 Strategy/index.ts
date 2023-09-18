abstract class StrategySort {
  public Title: string;

  constructor(title: string) {
    this.Title = title;
  }

  public abstract Sort(array: number[]): void;

  public toString(): string {
    return this.Title;
  }
}

class InsertionSort extends StrategySort {
  constructor() {
    super("Сортировка вставками");
  }

  public Sort(array: number[]): void {
    for (let i = 1; i < array.length; i++) {
      let j = 0;
      let buffer = array[i];
      for (j = i - 1; j >= 0; j--) {
        if (array[j] < buffer) {
          break;
        }
        array[j + 1] = array[j];
      }
      array[j + 1] = buffer;
    }
  }
}

class SelectionSort extends StrategySort {
  constructor() {
    super("Сортировка выбором");
  }

  public Sort(array: number[]): void {
    for (let i = 0; i < array.length - 1; i++) {
      let k = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[k] > array[j]) {
          k = j;
        }
      }
      if (k !== i) {
        let temp = array[k];
        array[k] = array[i];
        array[i] = temp;
      }
    }
  }
}

class BubbleSort extends StrategySort {
  constructor() {
    super("Пузырьковая сортировка");
  }

  public Sort(array: number[]): void {
    let n = array.length;
    let swapped: boolean;
    do {
      swapped = false;
      for (let i = 0; i < n - 1; i++) {
        if (array[i] > array[i + 1]) {
          let temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
}

class Context {
  private strategy: StrategySort;
  private array: number[];

  constructor(strategy: StrategySort, array: number[]) {
    this.strategy = strategy;
    this.array = array;
  }

  public Sort(): void {
    this.strategy.Sort(this.array);
  }

  public PrintArray(): void {
    console.log(this.strategy.toString());
    console.log(this.array.join(" "));
  }
}

const arr1: number[] = [1, 5, 10, 2, 4, 12, 14, 23, 12, 66];
let sort: StrategySort = new SelectionSort();
let context: Context = new Context(sort, arr1);
context.Sort();
context.PrintArray();

const arr2: number[] = [1, 5, 10, 2, 4, 12, 14, 23, 12, 66];
sort = new InsertionSort();
context = new Context(sort, arr2);
context.Sort();
context.PrintArray();

const arr3: number[] = [1, 5, 10, 2, 4, 12, 14, 23, 12, 66];
sort = new BubbleSort();
context = new Context(sort, arr3);
context.Sort();
context.PrintArray();
