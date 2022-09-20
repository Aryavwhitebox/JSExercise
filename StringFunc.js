let a = 'hello welcome to javascript learning'
console.log(a.length); //36
//gives the index length of the string 
console.log(a.indexOf('javascript'));  //17
console.log(a.indexOf('hello'));
console.log(a.lastIndexOf('to'));
//slice will cut the string on the basis of indexes
console.log(a.slice(0, 5)); //hello
//- will start from end and will give the values
console.log(a.slice(-10));
console.log(a.slice(5));

console.log(a.substring(0, 5));
console.log(a.substring(10, 15));