//loop concepts
//for
for (let index = 0; index <= 9; index++) {
    const element = index;
    // console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    // const element = i;
    // console.log(`this is i value of ${i}`);
    for (let j  = 1; j  <=  10; j ++) {
        // const element = array[j ];
        // console.log(`this is  j value of ${j}`);
        
        // console.log(i,'*',j,'=',i*j);
        
    }
    
    
}

// brack and continue

for (let index = 1 ; index <=20; index++){
    // const element = array[index];
   if (index==5) {
        // console.log('detected 5');
        break
   }
    // console.log(`value of i is ${index}`);  
}


for (let index = 1 ; index <=20; index++){
    // const element = array[index];
   if (index==5) {
        // console.log('detected 5');
        continue
   }
    // console.log(`value of i is ${index}`);  
}


// while 
let i=0
while (i<=10) {
    // console.log(`value of index is ${i}`);
    i=i+2
}
let myarr=['priya','priti','bhraveh','anoop']
arr=0
while (arr< myarr.length) {
    // console.log(`name is ${myarr[arr]}`);
    arr++
}


//do while loop

let score=1
do {
    console.log(`score is : ${score}`);
    score++
} while (score<=10);