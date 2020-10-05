//function
function increment(i) {
    return i + 1;
}

var increment2 = function (i) {
    return i + 1;
};

(function (i) {
    //console.log(this);
    //console.log(i);
    return { op: function () { console.log(this); } }
})(10).op();

//+function (i) { console.log(`i: ${i}`); }(10);
var counter = (function () {
    var i = 0;

    return {
        get: function () {
            return i;
        },
        set: function (j) {
            i = j
        },
        increment: function () {
            i++;
        }
    }
})()

console.log(counter.get());
counter.set(10)
counter.increment();
console.log(counter.get());