//solution 1
// var opObj = function () {
//     this.i = 0;

//     this.add = function (i) {
//         this.i += i;
//         return this;
//     };

//     this.subs = function (i) {
//         this.i -= i;
//         return this;
//     }

//     this.print = function () {
//         console.log(`total: ${this.i}`);
//     }
// };

// var x1 = new opObj();
// x1.add(10).subs(5).print()

//solution 2 using private variables and closure
var opObj = function () {
    var i = 0;
    //console.log(this);
    var add = function (j) {
        i += j;
        console.log(this);
        return this;
    };

    var subs = function (j) {
        i -= j;
        //console.log(this);
        return this;
    }

    var print = function () {
        console.log(`total: ${i}`);
    }

    return { add: add, subs: subs }
};

//var x1 = opObj();
//x1.add(10).subs(5).print()
//x1.add()