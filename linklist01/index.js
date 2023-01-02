class node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class linklist {
  costructor() {
    this.first = null;
    this.current = null;
  }

  addFirstNode(item) {
    this.first = new node(item);
    console.log(this.first);
  }

  addNode(item) {
    if (this.first == null) {
      this.first = new node(item);
      console.log(this.first);
    } else {
      this.next = new node(item, this.first);
      console.log(this.current);
    }
  }

  addnext(item) {
    if (this.first == null) {
      this.first = new node(item);
      this.current = this.first;
      console.log(this.first);
    } else {
      let current;
      while (this.current.next) {
        current = this.current.next;
        current.next = new node(item);
      }
    }
  }

  printAllData() {
    while (this.current.next) {
      console.log(this.current);
    }
  }
}

const ll = new linklist();
ll.addNode(21);
ll.addNode(32);
ll.printAllData();
