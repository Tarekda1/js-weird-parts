"use strict"

// var getA = function (a) {
//     return a;
// }

//let getA = a => a;

//console.log(getA(1));
var a = 4
let square = _ => { return a * a };
//console.log(square(2));

let mult = (a, b) => { return a * b }
//console.log(mult(2, 4));

var x1 = function () {
    this.val = 1;
    setTimeout(() => {
        this.val++
        console.log(this.val);
    }, 1)
}


//var xx = new x()

var x2 = (...n) => {
    console.log(n[1]);
}

x2(1, 2, 3)