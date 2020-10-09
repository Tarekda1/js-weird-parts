// 1+ 2 +3  .... n

let total = 0;
for (let i = 0, len = 3; i <= len; i++) {
    total += i;
}

console.log(total);

let add = function (n) {
    if (n <= 0) {
        return 0;
    }
    return n + add(n - 1);
};

console.log(add(3));