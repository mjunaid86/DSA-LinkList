class node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class linklist {
  constructor() {
    this.first = null;
    this.last = null;
  }

  addNext(item) {
    let current = null;
    if (this.first == null) {
      this.first = new node(item);
    } else {
      current = this.first;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new node(item);
    }
  }

  addFirst(item) {
    let current = this.first;
    if (current == null) {
      this.first = new node(item);
    } else {
      this.first = new node(item, current);
    }
  }

  printALL() {
    console.log(this.first);
  }
}

const ll = new linklist();
ll.addFirst(10);
ll.addNext(20);
ll.addNext(30);
ll.addFirst(5);
ll.printALL();
