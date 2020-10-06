const fib = (num) => {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(6));

//time complexity is: O(2^n)
//space complexity is: O(n) ==> depth of tree
