var xX = new Object();
//console.log(x);

var y = {}
//console.log(y);

var Pizza = function () {
    var hasBacon = false
    this.crust = 'thin'
    var toppings = 2

    this.getHasBacon = function () {
        return hasBacon
    }

    const getToppings = function () {
        return toppings
    }

    var temp = {}
    temp.getToppings = getToppings
    temp.pizza = this
    return temp;

}

var pizzaA = new Pizza()

//console.log('toppings' in pizzaA);
console.log(pizzaA);
//console.log(pizzaA instanceof Pizza);
//console.log(Pizza.constructor);
//console.log(pizzaA.pizza.getHasBacon());
//console.log(pizzaA.getToppings());