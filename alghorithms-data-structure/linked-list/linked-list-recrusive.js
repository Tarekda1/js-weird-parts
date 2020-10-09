class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }
    this._append(this.head, val);
  }

  _append(curr, val) {
    let next = curr.next;

    if (next === null) {
      curr.next = new Node(val);
    } else {
      this._append(next, val);
    }
  }

  print() {
    let curr = this.head;
    let data = this._print(curr);
    console.log(data);
  }

  _print2(curr, str) {
    if (curr === null) {
      return str;
    } else {
      if (curr && curr.val && curr.val !== "undefined") {
        str += curr.val;
        str += " ";
      }
      return this._print(curr.next, str);
    }
  }

  _print(curr) {
    if (curr === null) return "";
    return curr.val + "->" + this._print(curr.next);
  }

  contains(el) {
    let curr = this.head;
    return this._contains(curr, el);
  }

  _contains(curr, el) {
    if (curr.val === el) return true;
    if (curr.next) return this._contains(curr.next, el);
    else return false;
  }

  deleteValue(target) {
    if (this.head.val === target) {
      return this.head.next;
    }

    let prev = null;
    let curr = this.head;

    while (curr !== null) {
      if (curr.val === target) {
        prev.next = curr.next;
      }
      prev = curr;
      curr = curr.next;
    }

    return this.head;
  } //complexity O(n) O(1) space

  deleteValueRec(target) {
    if (this.head.val === target) {
      console.log(this.head.val);
      this.head = this.head.next;
    }
    this._delete(this.head, null, target);
  }

  _delete(curr, prev, target) {
    if (curr === null) {
      return;
    }

    if (curr.val == target) {
      //delete curr
      prev.next = curr.next;
      return;
    }

    this._delete(curr.next, curr, target);
  } //complexity O(n) O(n) space

  reverseList() {
    let prev = this.head;
    let curr = this.head.next;

    while (curr !== null) {
      prev = curr;
      curr.next = prev;
      curr = curr.next;
    }
  }
}

const list = new LinkedList();
list.append(10);
list.append(11);
list.append(12);
list.append(13);
list.reverseList();
console.log(list.print());

const sumlist = (head) => {
  let sum = 0;
  let curr = head;
  while (curr !== null) {
    if (curr && curr.val !== "undefined") {
      sum += curr.val;
    }
    curr = curr.next;
  }
  return sum;
};

const sumListRec = (sum, curr) => {
  if (curr === null) {
    return sum;
  }
  if (typeof curr.val === "number") {
    sum += curr.val;
  }
  //console.log(sum);
  return sumListRec(sum, curr.next);
};

const sumListRec2 = (curr) => {
  if (curr === null) {
    return 0;
  }
  return curr.val + sumListRec2(curr.next);
};

//console.log(sumListRec2(list.head));
