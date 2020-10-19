class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const nodeA = new TreeNode(1);
const nodeB = new TreeNode(2);
const nodeC = new TreeNode(3);
const nodeD = new TreeNode(4);
const nodeE = new TreeNode(5);
const nodeF = new TreeNode(6);

nodeA.left = nodeB;
nodeA.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.right = nodeF;

const dft = (root) => {
  if (root.length === 0) {
    return;
  }
  let currStack = [root];
  while (currStack.length > 0) {
    let curr = currStack.pop();
    let left = curr.left;
    let right = curr.right;
    console.log(curr.val);
    if (right !== null) {
      currStack.push(right);
    }
    if (left !== null) {
      currStack.push(left);
    }
  }
};

const dfRecursive = (root) => {
  //let stack = [root];
  inOrder(root);
};

function dfRecursiveHelper(stack) {
  if (stack.length === 0) {
    return;
  }
  let curr = stack.pop();
  console.log(curr.val);
  let left = curr.left;
  let right = curr.right;
  if (right !== null) {
    stack.push(right);
  }
  if (left !== null) {
    stack.push(left);
  }
  dfRecursiveHelper(stack);
}

//minimized
function preOrder(root) {
  if (root === null) {
    return;
  }
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
}

//post order
function postOrder(root) {
  if (root === null) {
    return;
  }
  postOrder(root.left);
  postOrder(root.right);
  console.log(root.val);
}

//in order
function inOrder(root) {
  if (root === null) {
    return;
  }
  inOrder(root.left);
  console.log(root.val);
  inOrder(root.right);
}

//dfRecursive(nodeA);

const sumTree = (root) => {
  if (root.length === 0) {
    return;
  }
  let currStack = [root];
  let sum = 0;
  while (currStack.length > 0) {
    let curr = currStack.pop();
    let left = curr.left;
    let right = curr.right;
    sum += curr.val;
    if (right !== null) {
      currStack.push(right);
    }
    if (left !== null) {
      currStack.push(left);
    }
  }
  return sum;
};

const sumTreeRecursive = (root) => {
  if (root === null) {
    return 0;
  }
  return root.val + sumTreeRecursive(root.left) + sumTreeRecursive(root.right);
}; //time complexity O(n) space complexity

console.log(sumTreeRecursive(nodeA));
