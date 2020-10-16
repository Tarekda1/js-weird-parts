function FirstReverse(str) {
  let reverseArray = [];
  for (let c of str) {
    reverseArray.unshift(c);
  }
  return reverseArray.join("");
}

function FirstReverse2(str) {
  // code goes here
  return str.split("").reverse().join("");
}

export { FirstReverse, FirstReverse2 };
