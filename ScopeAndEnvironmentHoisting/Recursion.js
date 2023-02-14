// //recursion
// function demo(number){
// console.log(number);
// }

// demo(10)
let counter=1;
function demo(number){
    if(counter>number){
        return
    }
    console.log(counter);
    counter++
    demo(number)

    }
    
    demo(10)
