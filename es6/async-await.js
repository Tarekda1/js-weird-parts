// console.log('person1: shows ticket');
// console.log('person2: shows ticket');

// const promiseWifeBringingTicks = new Promise((res, rejc) => {
//     setTimeout(function () {
//         res('ticket')
//     }, 3000);
// });


// const getPopCorn = promiseWifeBringingTicks.then((t) => {
//     console.log(`husband: we should go in`);
//     console.log(`wife: no iam hungry`);
//     return new Promise((resolve, reject) => {
//         resolve(`${t} popcorn`)
//     })
// });

// const getSomeWater = getPopCorn.then((t) => {
//     console.log(`husband: I need some water`);
//     console.log(`wife: ok hurry up`);
//     return new Promise((resolve, reject) => {
//         resolve(`${t} water`)
//     })
// })

// getSomeWater.then((t) => console.log(t))

// console.log('person4: shows ticket');
// console.log('person5: shows ticket');

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((res, rejc) => {
        setTimeout(function () {
            rejc('ticket')
        }, 1000);
    });

    let ticket
    try {
        ticket = await promiseWifeBringingTicks;
    } catch (error) {
        ticket = 'umm dont want to wait'
    }

    const getPopCorn = new Promise((resolve, reject) => {
        resolve(`popcorn`)
    })

    const getButter = new Promise((resolve, reject) => {
        resolve(`butter`)
    })

    // let popcorn = await getPopCorn;

    // let butter = await getButter;
    let [popcorn, butter] = await Promise.all([getPopCorn, getButter]);

    return `${ticket} ${popcorn} ${butter}`
}

preMovie().then((t) => console.log(t))

console.log('person4: shows ticket');
console.log('person5: shows ticket');

