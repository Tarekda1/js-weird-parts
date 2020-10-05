const x = (params) => {
    console.log('Iam called inside another fn');
}

const doSomething = (callback) => {
    console.log('do something');
    if (typeof callback === "function") {
        console.log(typeof callback);
        callback();
    }

}

//doSomething(x)
var myArr = [{
    num: 5,
    str: 'apple'
},
{
    num: 6,
    str: 'cabbage'
},
{
    num: 7,
    str: 'banana'
}]

myArr.sort((val1, val2) => {
    if (val1.str < val2.str) {
        return -1
    }
    else {
        return 1
    }
})
console.log(myArr)