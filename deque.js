class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  appendleft(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first.previous = newNode;
    }
    this.first = newNode;
    this.size++;
  }

  appendright(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
    } else {
      newNode.previous = this.last;
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
  }

  popleft() {
    if (this.size === 0) throw new Error("Empty deque");

    const val = this.first.val;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else if (this.size === 2) {
      this.first = this.last;
      this.first.next = null;
      this.last.previous = null;
    } else {
      this.first.next.previous = null;
      this.first = this.first.next;
    }
    this.size--;
    return val;
  }

  popright() {
    if (this.size === 0) throw new Error("Empty deque");

    const val = this.last.val;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else if (this.size === 2) {
      this.last = this.first;
      this.first.next = null;
      this.last.previous = null;
    } else {
      this.last.previous.next = null;
      this.last = this.last.previous;
    }
    this.size--;
    return val;
  }

  peekleft() {
    if (this.size === 0) throw new Error("Empty deque");
    return this.first.val;
  }

  peekright() {
    if (this.size === 0) throw new Error("Empty deque");
    return this.last.val;
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Deque;