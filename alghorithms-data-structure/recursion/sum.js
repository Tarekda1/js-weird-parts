const slowSum = (array) => {
  if (array.length === 0) {
    return 0;
  }
  const rest = array.slice(1);
  return array[0] + slowSum(rest);
};

//console.log(slowSum(data));
//time complexity: O(n*n) => O(n^2) (cuz of array.slice)
//space complexity: O(n)

/*=====*/
//better solution
/*=====*/

const sum = (array) => {
  return _sum(array, 0);
};

const _sum = (array, idx) => {
  if (idx === array.length) {
    return 0;
  }

  return array[idx] + _sum(array, idx + 1);
};

//console.log(sum(data));
//time complexity: O(n)
//space complexity: O(n)

//lets test our functions
const input = Array(9000).fill(1);

//slow
const startSlow = Date.now();
slowSum(input);
const endSlow = Date.now();
console.log(`finished in ${endSlow - startSlow}ms`);

//fast
const startFast = Date.now();
sum(input);
const endFast = Date.now();
console.log(`finished in ${endFast - startFast}ms`);
