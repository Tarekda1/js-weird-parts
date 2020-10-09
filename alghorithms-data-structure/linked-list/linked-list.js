// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//   }

//   append(val) {
//     if (this.head === null) {
//       this.head = new Node(val);
//       return;
//     }

//     let curr = this.head;
//     while (curr.next !== null) {
//       curr = curr.next;
//     }
//     curr.next = new Node(val);
//   }

//   contains(val) {
//     let curr = this.head;
//     do {
//       if (curr.val === val) {
//         return true;
//       }
//       curr = curr.next;
//     } while (curr !== null);
//     return false;
//   }

//   print() {
//     let str = "";
//     let curr = this.head;
//     while (curr !== null) {
//       str += curr.val + "->";
//       curr = curr.next;
//     }
//     console.log(str);
//   }
// }

// const list = new LinkedList();
// list.append("a");
// list.append("b");
// list.append("c");
// list.append("d");
// //console.log(list.print());
// console.log(list.contains("d"));
