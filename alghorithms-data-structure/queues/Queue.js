class QueueNode {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error("empty queue");
    if (this.size === 1) {
      this.back = null;
    }
    let dequeued = this.front;
    this.front = this.front.next;
    this.size--;
    return dequeued.val;
  }
}

const newQueue = new Queue();
newQueue.enqueue("a");
newQueue.enqueue("b");
newQueue.enqueue("c");
newQueue.enqueue("d");
console.log(`dequeued: ${newQueue.dequeue()}`);
console.log(newQueue.size);
console.log(newQueue.front.val);
console.log(newQueue.back.val);
