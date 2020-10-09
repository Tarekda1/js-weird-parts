const permutations = (elements) => {
  if (elements.length === 0) return [[]];

  const firstElement = elements[0];
  const rest = elements.slice(1);

  const permutationsWithoutFirst = permutations(rest);
  const allPerms = [];
  permutationsWithoutFirst.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      const permWithFirst = [
        ...perm.slice(0, i),
        firstElement,
        ...perm.slice(i),
      ];
      allPerms.push(permWithFirst);
    }
  });

  return allPerms;
};
console.log(permutations(["a", "b", "c", "d"]));

// [[c, b, a],
// [b, c, a],
// [b, a, c],
// [c, a, b],
// [a, c, b],
// [a, b, c]];
//time complexity O(n!)
//space complexity O(n^2)
