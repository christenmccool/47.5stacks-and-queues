const LinkedList = require('./linked-list');

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
    this._list = new LinkedList();
  }

  enqueue(val) {
    this._list.push(val);
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
  }


  dequeue() {
    const val = this._list.shift();
    this.size = this._list.length;
    this.first = this._list.head;
    this.last = this._list.tail;
    return val;
  }


  peek() {
    return this._list.getAt(0);
  }

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;
