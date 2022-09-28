let myFriends=['shaw','vab', 'kun','jacob','Dina']
myFriends.splice(3,1,'ram','rohan')
console.log(myFriends); //[ 'shaw', 'vab', 'kun', 'ram', 'rohan', 'Dina' ]

myFriends.splice(2,1)
console.log(myFriends); //[ 'shaw', 'vab', 'ram', 'rohan', 'Dina' ]
//kun has been removed from the above array

myFriends.splice(0,2)
console.log(myFriends);  //[ 'ram', 'rohan', 'Dina' ]
 //from 0th position 2 elements has been removed

 //concat method is used to concat two arrays

 let myOfficeFriends=['Nina','Aron','Katie','Paula']

 let myAllFriends=myFriends.concat(myOfficeFriends)
 console.log('==========================');
 console.log(myFriends);  //[ 'ram', 'rohan', 'Dina' ]

 console.log(myOfficeFriends); //[ 'Nina', 'Aron', 'Katie', 'Paula' ]

  console.log(myAllFriends); //[ 'ram',   'rohan','Dina',  'Nina','Aron',  'Katie','Paula']
   
  //sorting in ascending and descending order
//sorting in ascending order
  myAllFriends.sort()
  console.log(myAllFriends);

//   [
//     'Aron',  'Dina',
//     'Katie', 'Nina',
//     'Paula', 'ram',
//     'rohan'
//   ]

  //sorting in descending order

  myAllFriends.reverse()
  console.log(myAllFriends);

//   [
//     'rohan', 'ram',
//     'Paula', 'Nina',
//     'Katie', 'Dina',
//     'Aron'
//   ]