class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const a = new TreeNode(1);
const b = new TreeNode(2);
const c = new TreeNode(3);
const d = new TreeNode(4);
const e = new TreeNode(5);
const f = new TreeNode(6);
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;

class BinaryTree {}

const breadthFirstPrint = (root) => {
	const queue = [ root ];
	while (queue.length > 0) {
		const curr = queue.shift();
		console.log(curr.val);
		if (curr.left !== null) {
			queue.push(curr.left);
		}
		if (curr.right !== null) {
			queue.push(curr.right);
		}
	}
}; //time complexlity O(n) and time complexity O(n)

const bfs = (root, target) => {
	const queue = [ root ];
	while (queue.length > 0) {
		const curr = queue.shift();
		if (curr.val == target) {
			return true;
		}
		if (curr.left !== null) {
			queue.push(curr.left);
		}
		if (curr.right !== null) {
			queue.push(curr.right);
		}
	}
	return false;
};

const sumTree = (root) => {
	const queue = [ root ];
	let sum = 0;
	while (queue.length > 0) {
		const curr = queue.shift();
		sum += curr.val;
		if (curr.left !== null) {
			queue.push(curr.left);
		}
		if (curr.right !== null) {
			queue.push(curr.right);
		}
	}
	return sum;
};

//breadthFirstPrint(a);
// console.log(bfs(a, 'b'));
// console.log(bfs(a, 'x'));
console.log(sumTree(a));
