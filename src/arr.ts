class ViewArray {
  arr: Array<number>;

  constructor(arr: Array<number>) {
    this.arr = arr;
  }

  display() {
    for(let i = 0; i < this.arr.length; i++){
      console.log(this.arr[i]);
    }
  }
}

const testTwo = new ViewArray([1,2,3,4,5,6,7]);

console.log(testTwo.display());