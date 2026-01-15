function parent() {
  let count = 20; // lexical scope
  return {
    inc() {
      count += 1;
      this.print();
    },
    dec() {
      count -= 1;
      this.print();
    },
    rest() {
      count = 10;
      this.print();
    },
    print() {
      console.log(count);
    },
  };
}
let child = parent();
child.inc();
child.inc();
child.dec();
child.inc();
child.inc();
child.rest();

function parent() {
  let count = 0;
  function child() {
    count++;
    console.log(count);
  }
  return child;
}

let child_1 = parent();
child_1(); //1
child_1(); //2
child_1(); //3
child_1(); //4
