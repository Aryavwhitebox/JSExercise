let num1 = 10
let num2 = 20
//toString will convert the integer to string and returns the string
console.log(num1.toString());
console.log(num2.toString());
//parseInt will take a string and will return the integer

let a = "10"
let b = "10.5"
let c = "Sam"
console.log(parseInt(a));
console.log(parseInt(b));

//parseFloat() string numeral as an input and gives float as o/p
console.log(parseFloat(b));

console.log(parseFloat(c));//this will return nan as the input is 
//string literal
let f = 10.9032923294
console.log(f.toFixed());  //11
//toFixed will round off the input value
console.log(f.toFixed(2)); //10.90
//the above line will round and gives two decimals
console.log(f.toFixed(5));