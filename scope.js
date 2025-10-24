//  Global and Local scope
//{} isko scope kahte hie 
let a=200
const b=100
var c=300
//aur ye jo bahar varible define karte hei ise bolte hie global scope
if (true) {
    let a =10
    const b=20
    // var c=30
    // console.log('iner :',a);
    
}   //isko bolte hei block scope

// console.log(a);
// console.log(b);
// console.log(c);  //isliye var ka use km hota hei 

// DOM -> Document Object Model

// Scope level and mini hoisting

function one() {
    const userName='priya'
    function two(params) {
        const value='value'
        // console.log(userName);
        
    }
    // console.log(value);
    
    two()
}
one()

if (true) {
    const name='priti'
    if (name==='priti') {
        const value=true
        // console.log(name+value);
        
    }
    // console.log(value);
    
}
// console.log(name);

/******** intersting********/

// console.log(addone(3))
// function addone(num) {
//     return num +1
// }
// console.log(addone(5));


// console.log(addtwo(2));   //hosting
// const addtwo= function (num) {
//     return num+2
// }
// console.log(addtwo(4));
 

// // this keyword

// const user={
//     username:"priya",
//     price:999,
//     welcomemsg:function () {
//         // console.log(`${this.username}, welcome to website`);
//         // console.log(this);   // thid corrent contacs ka baat karta hei .
        
        
//     }

// }
// user.welcomemsg()
// console.log(user.price)
// user.username='bhavesh'
// user.welcomemsg()
  
// console.log(this);
