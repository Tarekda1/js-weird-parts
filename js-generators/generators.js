//let i = [1, 2, 3, 4];

//let iterator = i[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// while (!iterator.next().done) {
//     console.log(iterator.next().value);
// }



function* generator() {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

// let iterator1 = generator();

// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());
// console.log(iterator1.next());

function* infiniteMaker() {

    let i = 0;
    while (true) {
        yield i;
        i++;
    }

}

// let iterator2 = infiniteMaker();
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());
// console.log(iterator2.next());

//example of yielding another generator inside a generator

function* generator1() {
    yield 1
    yield* anotherGenerator();
    //return 'bye'; //return inside a generator will stop it
    yield 3;
}

function* anotherGenerator() {
    yield 2;
}

let iter1 = generator1();
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());
console.log(iter1.next());


//example usage 
function request(url) {
    return new Promise((resolve, reject) => {
        makeAjaxCall(url, function (err, text) {
            if (err) reject(err);
            else resolve(text);
        });
    })
}

function makeAjaxCall(url, cb) {
    cb('', 'done');
}

/*this is an example of how to utilize generators to wait 
for one request to finish before moving to next request */
function* callRequestGenerator() {
    yield request('url1');
    yield request('url2');
}