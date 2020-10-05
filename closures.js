// var passed = 3

// var addTo = function () {
//     var inner = 2
//     return passed + inner
// }

// console.dir(addTo())

// passed = 4

// console.dir(addTo())


var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner
    }
    return add
}

//console.dir(addTo(3))

var addThree = addTo(3)
//console.log(addThree(4));
var addFour = addTo(4)
//console.log(addFour(5));

var car = function () {
    let model = 'toyota'

    return {
        getModel() {
            return model
        },
        setModel(m) {
            model = m
        }
    }
}

//var toyota = car()
// console.log(toyota);
// console.log(toyota.getModel());
let f = () => {
    let i = 1
    return () => {
        console.log(i);
    }
}

//console.dir(f());

for (var index = 0; index < 3; index++) {
    ((i) => {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    })(index)
}

console.log('after the loop');