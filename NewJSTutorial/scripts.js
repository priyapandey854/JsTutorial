// var , let , const 
// declaration and initialization
// let a; -> declaration
// let a =12; -> initialization
// var a =10;
// var -> ye humesha window mei add hota hei ,
//  ye function scoped hota hei 
//  and isko fir se declara kar skte hei and error nhi aata hei o bhi same name se 
// let a=12;
// let a=13;
// const add = 'priya';

// const { startTransition } = require("react");



// scope (global, block, funtional)
// var a= 12;
// {
//     var b= 123;
// }
// console.log(a);
// console.log(b);

// {
//     let a =23;
//     console.log(a);

// }
// console.log(a);
// done 


// Reassignment , redeclaration
// var a = 12;
// a= 13; -> reassignment , ise upate mltb updatiob bhi kahte hei 
//  var a = 22; -> redaclaration
// console.log(a);

// let b = 14;
// b=15; -> reassignment let mei bhi possible hei 
// let b =15; -> but redaclaration is not possible 
// console.log(b);


// Temporal Deal Zone
// tdz - utna area hei jitne mei js ko pta hei ki variable 
// exisit karta hei but o aap ko value nhi tati hei
// console.log(a);
// line Node. 47 se 50 tk hei tdz

// var a = 12;


// hoisting impact per type
// hosting -> ak variable ko jb js mei banate hei to wo 
// variable do hisso mei toot jata hei uska declare part uper 
// chala jata hei and uska initializaton part neeche rah jata hei.
// var a = undefined;

// a =12;
// aur ise hum hoisting kahte hei ma ki hosting 
// var -> hoist -> undefined
// let -> hoist ->X
// const -> hoist -> X



// Data Type + Type System
// data types
//  2 type of data type
// 1 -> primitives  -> string , number, boolean, bigint, symbol, undefined, null
// 2 -> reference -> array , object, function
// `` -> ise backticks kahte hei , "", ''
//  symbol -> ye ak unique immutable(change nhi hota hei ) value hei
// let a = 989216463876n;



//  dyanmic typing -> ja mei static typing nahi hei and yeha par
// dynamic typing jiska mtlb hei  hum data ko change kar sakte hei becouse yeha par dynamic data types hei .
// let a = 12;
// a = true;
// a = null;
// a = undefined;
// a = 'priya '
// console.log(a); 
//   this is aal is dynamic typing  


// type quirks (e.g., typeof numll==='object')

// truthy vs falsy values 
// falsy valu -> 0, "", null, NaN , undefined ,document.all 
// baki sb truthy valu hei

//  NaN ka data type number is liye hei becouse o ak faller data type of number hei 


// type coercion -> concept jisme aap ka ak type automatically convert ho jayega 
// jese ->
// a = '2'
// b = 2;
// c = a - b;
// console.log(c); -> - bs subtract karta hei to string ko int mie covart kar liya ehi 


// /concatination , add do kam karta hei + .
//  let c;
//  console.log(c);
//  let b = 12;
//  console.log(b);

// a ='2';
// b= 2;
// c = a+b;
// console.log(c);
// done


// operators 
// agasr mere pass koi ak sring hei uske aage + lg dinge tono NaN(not a number ) mei convert hoti hei
// jese -> 
// +"5"

// unary operator -> +, -, !, typeof , ++prefix ,postfix++
//  ternary operator -> ?:
// jese ->
// 12>10 ? console.log('true') : console.log('false');

//  exclamation -> (!) bolte hei ise
// !! isse value pta chal jati hei ki truethy hei ki falsy
// typeof and instanceof mei difference
// instanceof -> ye ak reference value ke sath work karta hei na ki primitive value sath




// control flow  (jise hum condional stetament kahte hei )
// if , else if, else
// switch case
// early return pattern
// jese ki ->
// function grey(value) {
//     if (value <2) return 'd';
//     else if (value < 14) return 'c';
//     else return 'b';
// }
// console.log(grey(10));


// function getgrande(score) {
//     if( score>=90 && score<=100) return 'A+';
//     else if ( score >=80 && score <=89) return 'A';
//     else if (score>= 70 && score<=79) return 'B';
//     else if ( score >= 60 && score <= 69) return 'C';
//     else if ( score >= 33 && score <= 59 ) return 'D';
//     else if ( score >= 0 && score <=32) return "fail";
//     else return 'Invaild Marks';
// }

// console.log(getgrande(50));


// tarika 2
// function getgrande(score) {
//     if (score >= 90 && score <= 100) return 'A+';
//     if (score >= 80 && score <= 89) return 'A';
//     if (score >= 70 && score <= 79) return 'B';
//     if (score >= 60 && score <= 69) return 'C';
//     if (score >= 33 && score <= 59) return 'D';
//     if (score >= 0 && score <= 32) return "fail";
//     return 'Invaild Marks';
// }
// console.log(getgrande(65));


//  rock-paper-scissors logic


// Loops
//  kuchh bhi repeat karne ko loop kahte hei 

// for , while, do-while ,break, continue , for-of , foreach , for array , for-in , 

// kaha se jana hei -> kaha tk jana hei -> kese jana hei 
// for 
// for ( start ; end ; change){}
// for (let index = 0; index <100; index++) {
//     // const element = array[index];
//     console.log(index);

// }

// kaha se jana hei -> kb rukna hei -> kese jana hei 
// while
// start
// while(end){
// code
// change
// }

// let i=0;
// while (i<30) {
//     console.log(i);
//     i++
// }

// let j =12;
// do {
//     console.log(j);
//     j++

// } while (j<10);


// let i = 1;
// for (i=1; i<=20; i++){
//     if (i%2==0) {
//         console.log(i);

//     }
// }
// let i=10;
// while (i>=1) {
//     console.log(i);
//     i--
// }

// let i =1;
// while (i<=15) {
//     if (i%2 !==0) {
//         console.log(i); 
//     }
//     i++
// }

// let i=1;
// for(i=1; i<=10; i++)
// {
//     console.log(5*i);
// console.log(`5*${i} = ${5*i}`);

// }

// let sum = 0;
// let i =1;
// for ( i=1; i<=100; i++)
// {
//     sum = sum +i;
// }
// console.log(sum);

// let i=1;
// for ( i=1; i<=50; i++){
//     if (i%3 ===0) {
//         console.log(i);

//     }
// }

// let value = prompt('given a number :')
// let i =1;
// for ( i=1; i<=value; i++){
//     if (i%2===0) {
//         console.log(`this number ${i} is even`);

//     }else{
//         console.log(`this number ${i}is odd`);

//     }
// }

// let i=1;
// for(i=1; i<=100; i++){
//     if (i%3==0 && i%5==0) {
//         console.log(i);

//     }
// }
// let i=1;
// for(i=1; i<101; i++){
//     console.log(i);

//     if (i%7==0) {
//         break
//     }
//     console.log(i);

// }

// let i = 1;
// for (i = 1; i <= 20; i++) {
//     if (i % 3 == 0) continue;
//     console.log(i);

// }

// let index =0;
// let i=1;
// for (i=1; i<100; i++){
//     if (i%2 !==0) {
//         index++
//         console.log(i ,index);
//         // index++
//     }
//     if (index==5) {
//         break
//     }
// }


// Function -> this is a very importent topic
// what , how , why 
// function hum reuse ke loye use kahte hie 
// function abc(params) {
//     // ise  function diclaration kahte hei , ya fir fun statement bhi kahte hein
// }

// let abc = function(){
//     //  ise function expression kahte heu , ya fun variable bhi kahte hei 
// }
// ()=>{}; -> ye arow functionhei 
// let abc = ()=>{
//     //  ye fat arow function hei 
// }
// jb argument kyi sare ho to hume utne hi parameter banane padhnege 
// isse bachne k eloye hum 'rest ' ka use kahte hei (...)isi ko rest aur spread hei
// agar ... function ke parameter space mei lage to rest hei and jb wo array aur object mei lge tb use 
// spred kahte hei 
// function avc(a,b,c, ...value) {
//     console.log(a,b,c,value);

// }
// avc(9,2,4,6,4,3,2,9)
// return
// first class function -> functions kop values ki tarah trat kar sakhte hei 
// function name(val) {
//     val()
// }
// name(function (params) {
//     console.log('log');

// })
// val()

// high order functions =>no fun hota hei jo return kare function ya fir 
// accepet kare ak function apne parameter mei 

// function abc(val) {
//     return function name(params) {
//         console.log('log');

//     }
// }
// console.log(abc());

// pure vs impure function
// let a =12;
// function name(params) {
//     console.log('heloo');

// }   -> this is a pure funtions
// function abc() {
//     a++
// }
// abc() -> this is a impure funtions

// closures -> yesa fun jo return kare ak fun aur us fun mei parent fun ka koi varible  pass ho 
// function abc() {
//     let a = 12;
//     return function () {
//         console.log(a);
//     }
// }
//  let val=abc()
//  console.log(val());
 
// lexical scoping
// function abc(){
//     let a =12;
//     function dfg() {
//         let b =12;
//         function val() {
//             let c=12;
//         }
//     }
// }
// iife 
// (function name(params) {
    
// })()

// let multy = (a,b)=>{ return a+b}
// console.log(multy(2,3))
// use rest parameter to accepet any number of score and return tatal on. 
// function getgrande(...scoure) {
//     let total =0;
//     scoure.forEach(function (val) {
//         total = total+val;
//     })
//     return total;
// }
//  let value=getgrande(12,10,20,40)
//  console.log(value);
 


// Array 
// usecase hei ki iska adar huym ak se jada valu use kah sakhte hei 
let arr = [1,4,6,2,7,8]

 let array=arr.map(function (val) {
    // console.log(val);
    return 12;

})
console.log(array);





