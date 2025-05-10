class Queue {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  add(element) {
    this.items.push(element);
  }

  peek() {
    return this.items[0];
  }

  dequeue() {
    return this.items.shift();
  }
}

module.exports = Queue;
