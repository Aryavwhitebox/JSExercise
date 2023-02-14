//for in is used in objects

let a={
   name:'aryav',
    role:'ui',
    techngology:'react'
}

 for (const key in a) {
   // console.log(key);
    console.log(`the keys are ${key} and values are ${a[key]}`); 
 }
