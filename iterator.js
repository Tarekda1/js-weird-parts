/*string is of type iterable*/
let numArray3 = [1, 2, 3, 4];

// for (let i = 0, len = numArray3.length; i < len; i++) {
//     console.log(numArray3[i]);
// }

let numArray4 = [1, 2, 3, 4];

// for (let item of numArray4) {
//     console.log(item);
// }

//or we can use iterator
let iterator = numArray4[Symbol.iterator]();
let nextItem = iterator.next();
// while (!nextItem.done) {
//     console.log(nextItem.value);
//     nextItem = iterator.next();
// }

/*string is not of type iterable we need to add symbol.iterator to make it iterable*/
let anObject = {
    name: 'bob',
    age: 20,
    friends: ['tarek', 'khalil'],
    getName: function () {
        return this.name;
    },
    [Symbol.iterator]: function () {
        let step = 0;
        const iterator = {
            next() {
                step++;
                if (step == 1) {
                    return { value: 1, done: false }
                }
                else if (step == 2) {
                    return { value: 2, done: false }
                }
                else if (step == 3) {
                    return { value: 3, done: false }
                }

                return { value: undefined, done: true }
            }
        }

        return iterator;
    }
};

let iterator2 = anObject[Symbol.iterator]();
let nextItem2 = iterator2.next();
while (!nextItem2.done) {
    console.log(nextItem2.value);
    nextItem2 = iterator2.next();
}

/* or the below */

// for (let step of anObject) {
//     console.log(step);
// }

/* end of object example */

//for in prints keys inside an object
// for (let key in anObject) {
//     console.log(key);
// }


// for (let item of anObject) {
//     console.log(item);
// }

/*string is of type iterable*/
let myString = 'hello';

// for (let character of myString) {
//     console.log(character);
// }
