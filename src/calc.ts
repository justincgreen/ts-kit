class Calculator {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  multiply() {
    return this.x * this.y;
  }
}

const testThree = new Calculator(2,4);
console.log(testThree.multiply());