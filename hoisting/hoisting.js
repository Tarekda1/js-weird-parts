var y = 2;

function z1() {
    console.log(y);
    // var y = 1; --> here is the weird part :)
}
//z1();

function y1() {

    if (true) {
        var x = 1;
    }

    console.log(x);
}

y1();

//define a global variable 
Object.defineProperty(this, 'PI', {
    value: 3.14,
    writable: false
});

//console.log(PI);

