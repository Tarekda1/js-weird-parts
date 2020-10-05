console.log(this);

const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('waited')
    }, 1000);
});


const p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject('waited')
    }, 1200);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(function () {
        reject('waited')
    }, 1600);
});

// allSettled new to promises
// Promise.allSettled([p1, p2, p3]).then(results => {
//     results.forEach(r => {
//         console.log(r);
//     });
// })

//Nullish Coalescing operator

let xObj = {
    profile: {
        name: '',
    }
};

console.log(xObj.profile.name || 'Tito');
console.log(xObj && xObj.profile && xObj.profile.age); // instead u can write cl(xObj.?profile.?age)
//console.log(xObj.profile.age ?? 'Tito');