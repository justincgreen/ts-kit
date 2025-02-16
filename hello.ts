class Greeting {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const test = new Greeting("Justin");

console.log(test.greet());