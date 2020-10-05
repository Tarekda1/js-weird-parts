let mammal = function (legs) {
    this.legs = legs;
};

let cat = function (legs, isDomesticated) {
    mammal.call(this, legs);
    this.isDomesticated = isDomesticated;
};

let lion = new cat(4, false);
//console.log(lion);

let numArray = [1, 2, 3]

//console.log(Math.min.apply(null, numArray));

let button = function (content) {
    this.content = content;
}

button.prototype.click = function () {
    console.log(`${this.content} clicked`);
}

let newButton = new button('add');
//newButton.click();

// let xObj = {
//     content: 'X obj'
// }

let looseClick = newButton.click.bind(newButton);

//looseClick();

let myObj = {
    asyncGet(cb) {
        cb()
    },
    parse() {
        console.log('parse called');
    },
    render() {
        let cb = function () {
            this.parse();
        }.bind(this);
        this.asyncGet(cb);
    }
};

myObj.render();



