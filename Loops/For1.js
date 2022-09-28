let a=[1,2,3,4,5]
for(let i=0;i<=a.length-1;i++){
    console.log(a[i]);  1
    // 2
    // 3
    // 4
    // 5
}

//break keyword

for(let i=0;i<=a.length-1;i++){
    if(i>=3) break
    console.log('after breaking '+a[i]);
//     after breaking 1
// after breaking 2
// after breaking 3
}


//continue

for(let i=0;i<=a.length;i++){

    if(i%2!=0) continue
    console.log('after continue'+a[i]);
//     after continue 1
// after continue 3
// after continue 5

}