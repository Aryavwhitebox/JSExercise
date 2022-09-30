// function Function2Args(personName){
// console.log('hey ' + personName);
// }
// Function2Args('Aryav')
// Function2Args('Sri')
// Function2Args('Medha')

function Function2Args(num1,num2){
    console.log(num1+num2);
}

Function2Args(2,7);
Function2Args(10,20);
Function2Args(15,13);
//if you add more parameters above and not in the arguments of the function
//it will ignore the extra parameters and accept which are there in the function
Function2Args(19,2,3,12,1) //21
// here we are getting 21 which is 19+2 that means it is ignoring all the other values