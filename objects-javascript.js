/**
 * factory pattern
 */

var peopleFactory = function (name, age, state) {
    var temp = {}
    temp.age = age
    temp.name = name
    temp.state = state
    temp.printPerson = function () {
        console.log(this);
        console.log(`name: ${this.name}`);
    }
    return temp
}

var person = peopleFactory('tarek', 10, 'beirut')
//person.printPerson()

/**
 * constructor pattern
 */

var peopleConstructor = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
    this.printPerson = function () {
        console.log(`name: ${this.name}`)
    }
}

var person = new peopleConstructor('tito', 30, 'beirut')
//person.printPerson()

/**
 * prototype
 */

var peopleProto = function () {

}
peopleProto.prototype.name = ''
peopleProto.prototype.age = 0
peopleProto.prototype.state = 'beirut'
peopleProto.prototype.printPerson = function () {
    console.log(`state: ${this.state}`);
}

var person1 = new peopleProto()
person1.name = 'tarek'
person1.state = 'saida'
//person1.printPerson()

//console.log('state' in person1);
//console.log(person1.hasOwnProperty('age'));

var peopleDynamicProto = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    if (typeof this.printPerson !== 'function') {
        peopleDynamicProto.prototype.printPerson = function () {
            console.log(`state: ${this.state}, name:${name}`);
        }
    }
}


var person1 = new peopleDynamicProto('tarek', 10, 'beirut')
person1.printPerson()




