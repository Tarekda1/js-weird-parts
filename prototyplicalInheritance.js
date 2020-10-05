// let cat = function (name) {
//     this.name = name
// }

// cat.prototype.getName = function () {
//     return this.name
// }

// let cici = new cat('cici')
// console.log(cici.getName());

// let bisi = new cat('bisi')
// console.log(bisi.getName());

'use strict'

let Car = function (_color) {
    if (!new.target) throw 'Car() must be called with new'

    this.setColor = function (color) {
        _color = color;
    }

    this.getColor = function () {
        return _color
    }
}

let redCar = new Car('red')
console.log(redCar.getColor());