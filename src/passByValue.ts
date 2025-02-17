function changeValue(x: number) {
  x = 100; // changing the copy not the original
}

let a: number = 10;

changeValue(a);
console.log(a); // Output: 10 (unchanged)
