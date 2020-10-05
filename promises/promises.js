let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    //cleaning the room
    let isClean = true;

    if (isClean) {
      resolve("Cleaned");
    } else {
      reject("Not Cleaned");
    }
  });
};

let removeGargabge = (message) => {
  return new Promise((resolve, reject) => {
    resolve(`${message} remove Garbage`);
  });
};

let winIceCream = (message) => {
  return new Promise((resolve, reject) => {
    resolve(`${message} Win IceCream`);
  });
};

// cleanRoom().then((result) => {
//     return removeGargabge(result)
// }).then((result) => {
//     return winIceCream(result)
// }).then((result) => {
//     console.log(`Finished ${result}`)
// }).catch(err => {
//     console.log(err)
// })

// Promise.all([cleanRoom(), removeGargabge(), winIceCream()]).then(() => {
//     console.log('finished all')
// })

// Promise.race([cleanRoom(), removeGargabge(), winIceCream()]).then(() => {
//     console.log('one of then is finished')
// })
(async function clean() {
  try {
    const result = await cleanRoom();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
