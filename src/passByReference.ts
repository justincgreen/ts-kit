function modArr(arr: Array<number>) {
  arr.push(4); // mods the original array
}

let numbers = [1,2,3];
modArr(numbers);
console.log(numbers); // [1,2,3,4]

// References object in memory
type myObj = {
  name: string;
}

function changeObject(obj: myObj) {
  obj.name = "Updated";
}

let person = { name: "Bob" }
changeObject(person);
console.log(person.name); // Updated