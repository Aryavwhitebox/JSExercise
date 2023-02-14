var let and const

var x=0
//can be reassigned
var x=10
console.log(x);

var block variable can be redclared outside the block
{
    var x=2
}

var x=3
console.log(x);

let can be accessed in the same block
outside its block it cannot be accessed
{
    let x=10
    //console.log(x);
}
here we will get an error console.log(x);

let x=10
{
    let x=4
    console.log('block scoped '+x);
}
console.log('outside the block '+x);

lets try redclaring a var variable
var x=5
let x=10

this is not allowed redclaring again using let console.log(x);


CONST
const h=10
console.log(h);
const values should be assigned when they are declared
const a=10
a=10
console.log(a);


but we can change the values of an array
You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

You can change an element:
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);

lets try reassigning the values in array

const cars = ["Saab", "Volvo", "BMW"];

cars = ["Toyota", "Volvo", "Audi"];    // ERROR
console.log(cars);
