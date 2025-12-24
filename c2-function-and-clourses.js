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
