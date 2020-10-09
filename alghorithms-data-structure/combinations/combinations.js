const combinations = (elements) => {
  if (elements.length === 0) {
    return [[]];
  }
  const firstEl = elements[0];
  const combsWithoutFirst = combinations(elements.slice(1));
  const combsWithFirst = [];

  combsWithoutFirst.forEach((comb) => {
    combsWithFirst.push([...comb, firstEl]);
  });

  return [...combsWithoutFirst, ...combsWithFirst];
};

console.log(combinations(["a", "b", "c", "z"]));

//complexity is O(2^n)
//space O(n*n)
