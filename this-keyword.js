'use strict'

this.table = 'window table'

//solution 1
const cleanTable_1 = function (soap, perfum) {
    let that = this;
    let _perfum = perfum || 'my perfum'
    function innerFunction(_soap) {
        console.log(`cleaning ${that.table} with ${soap} and ${_perfum}`);
    }
    innerFunction(soap)
}

//solution 2
const cleanTable_2 = function (soap, perfum) {
    function innerFunction(_soap) {
        console.log(`cleaning ${this.table} with ${_soap}`);
    }
    innerFunction.call(this, soap, perfum)
}

//solution 3
const cleanTable_4 = function (soap, perfum) {
    function innerFunction(_soap) {
        console.log(`cleaning ${this.table} with ${_soap}`);
    }
    let bound = innerFunction.bind(this)
    bound(soap, perfum)
}

//solution 4
const cleanTable = function (soap, perfum) {
    const innerFunction = (_soap) => {
        //console.log(this);
        console.log(`cleaning ${this.table} with ${_soap}`);
    }
    innerFunction(soap)
}


this.garage = {
    table: 'tarek\'s table'
}

// let johnsRoom = {
//     table: 'johns room'
// }

// let createRoom = function (name) {
//     this.table = `${name}s room`    
// }
class createRoom {

    constructor(name) {
        this.table = `${name}s room`
    }

    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`);
    }

}

// createRoom.prototype.cleanTable = function (soap) {
//     console.log(`cleaning ${this.table} using ${soap}`);
// }

const jillsRoom = new createRoom('Jill');
const johnsRoom = new createRoom('John')

jillsRoom.cleanTable('dove')

console.log('cleanTable' in createRoom);

//cleanTable.apply(this, ['lifebo'])
