interface IStack<T> {
  push: (item: T) => void;
  pop: () => T | undefined;
  peak: () => T | null;
  getSize: () => number;
}

export class Stack<T> implements IStack<T> {
  private container: T[] = [];

  push(item: T): void {
    this.container.push(item);
  }

  pop(): T | undefined {
    return this.container.pop();
  }

  peak(): T | null {
    return this.getSize() > 0 ? this.container[this.getSize() - 1] : null;
  }

  getSize() {
    return this.container.length;
  }
}
