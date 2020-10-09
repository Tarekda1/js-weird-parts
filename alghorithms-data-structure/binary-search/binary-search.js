let binarySearchLinear = (target, array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (target > array[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

//time complexity O(log(n))

let array = [1, 2, 4, 5, 6, 7, 8, 10, 12, 15, 16];
console.log(binarySearchLinear(13, array));

const binarySearchRecursive = (array, target, left, right) => {
  if (left > right) {
    return false;
  }

  let mid = Math.floor((left + right) / 2);
  if (target === array[mid]) {
    return mid;
  }
  if (target < array[mid]) {
    return binarySearchRecursive(array, target, left, mid - 1);
  } else {
    return binarySearchRecursive(array, target, mid + 1, right);
  }
};

//time complexity O(log(n))
