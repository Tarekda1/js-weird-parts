var xFn = function () {
    console.log(arguments);
    // to convert array like obj to real array
    var arr = [].slice.call(arguments, 0);
    console.log(arr);
};

var xFn2 = function (a, b, c, ...n) {
    console.log(n);
};


//xFn2(1, 3, 4, 5);

var doWhatEver = ['play games', 'enjoy sport', 'watch movies'];
var life = ['born', 'learn to walk', 'learn coding', ...doWhatEver, 'go to hell', ':))'];
//console.log(life);

var aArr = [1, 3, 4];
var bArr = [4, 5, 6];
//aArr.push(...bArr); // this is the new way
//aArr.concat(bArr);
//[].push(aArr, bArr);//this is the old way
var addToAarray = [].push.bind(aArr);
addToAarray.apply(null, bArr);
console.log(aArr);