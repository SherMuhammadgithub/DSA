class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }

  pop() {
    let lastElement = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastElement;
  }

  shift() {
    let firstElement = this.data[0];
    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  delete(index) {
    let elementToDelete = this.data[index];
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return elementToDelete;
  }
  // [1,2,3]
        
}


const myNewArray = new MyArray();
myNewArray.push("one");
myNewArray.push("two");
myNewArray.push("three");
// myNewArray.pop();
// myNewArray.shift();
console.log(myNewArray.delete(1));
console.log(myNewArray.get(0));
console.log(myNewArray);