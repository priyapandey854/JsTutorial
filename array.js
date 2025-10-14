// array

const myarr = [1, 2, 4, 3, 5]     // array ka type object hota hei 
// console.log(myarr);
// console.log(myarr[0]);


let myarr2 = Array(1, 2, 3, 6, 3, 8)
// console.log(myarr2);
// console.log(typeof myarr2);

// array methods

myarr.push(6)
myarr.pop()

myarr.unshift(8)
myarr.shift(8)
// console.log(myarr);

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(4));
// console.log(myarr.indexOf(19));

const newarr= myarr.join()   // ye array ko string mei convert kar deta hei ..

// console.log(typeof newarr);    // string

// slice , splice

console.log("A :", myarr.slice(1,4));

console.log("B :", myarr);
myarr1=myarr.splice(1,4)
console.log("c :", myarr);
console.log(myarr1);








