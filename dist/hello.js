"use strict";
class Greeting {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
}
const test = new Greeting("Justin");
console.log(test.greet());
