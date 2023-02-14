//recursion
//first try below code we will get stack full error
// function demo(number){
// console.log(number);
// }
// demo(10)

//now try recursion
let counter=1;
function demo(number){
    if(counter>number){
        return
    }
    console.log(counter);
    counter++
    demo(number)

    }
    
    demo(10);
