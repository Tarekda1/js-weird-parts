var obj = {
    num: 2
}

var obj2 = {
    num: 4
}



var addToThis = function (a, b, c) {
    return this.num + a + b + c
}

//console.log(addToThis.call(obj, 3, 4, 5));

//console.log(addToThis.call(obj2, 3, 4, 5));

const arr = [3, 4, 5];

var addBounded = addToThis.bind(obj);
console.log(addBounded);
console.log(addBounded.apply(null, arr));
