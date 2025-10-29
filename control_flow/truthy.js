const userEmial='priya@98164'
if (userEmial) {
    console.log('got user email');
    
}else{
    console.log('do not have user email');
    
}

// falsy values
// false,0,-0, BigInt 0n, '', null, undefined, NaN,

// truthy values
// "0", 'false', " ", [], {}, function(){}, 
// const emptyarr=[]
// if (emptyarr.length===0) {
//     console.log('Array is empty');
// } 

const emptyobj={}
if (Object.keys(emptyobj).length===0) {
    console.log('empty object');
    
}
// false==0, false=='', 0=='', -> true


