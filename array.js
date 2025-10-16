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

// console.log("A :", myarr.slice(1,4));

// console.log("B :", myarr);
myarr1=myarr.splice(1,4)
// console.log("c :", myarr);
// console.log(myarr1);


heros=["shaktiman","ayarman","sunil","anil"]
heroins=['priti','riya','rinkal','priya','pragati']
heros.push(heroins)
// console.log( heros);
// console.log(heros[3]);
myheros=heros.concat(heroins)
// console.log(myheros);

myArray=[...heros, ...heroins]
// console.log(myArray);


const anotherArray= [1,2,4,3,[6,6,3],2,[8,9,6],3,6[2,[2,3,2]]]
// console.log(anotherArray);
const myanotherArray=anotherArray.flat(Infinity)
// console.log(myanotherArray);



console.log(Array.isArray("priya"));    //ye array nhi hei
console.log(Array.from("priya"));   //ye aray hei aur ise array mei convert kar deta hei 

console.log(Array.from({name:"priya"}));  //interesting


let num1=100
let num2=200
let num3=300
console.log(Array.of(num1,num2,num3));

const oneArray=[2,4,5]
const twoArray=[7,8,9]
const threeArray=[...oneArray, ...twoArray]
console.log(threeArray);















