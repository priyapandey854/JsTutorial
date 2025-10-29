
// this keyword

const user={
    username:"priya",
    price:999,
    welcomemsg:function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);   // thid corrent contacs ka baat karta hei .
        
        
    }

}
user.welcomemsg()
// console.log(user.price)
user.username='bhavesh'
user.welcomemsg()
  
// console.log(this);


// function chai(params) {
    // console.log(this);
    // let username='anoop'
    // console.log(this.username);  // ye sirf object mei work kata hei as a function mei nhi     
// }
// chai()


// const chai=function (params) {
//     let username='ankita'
//     console.log(this.username);    
// }
// chai()

const chai=(params) =>{
    let name='priya'
    // console.log(this);
    
}
chai()
// => ise arrow functions kahte hei 
// const num=(num1, num2)=>{
//     return num1+num2
// }

//implysit return ..
// const num=(num1, num2)=> num1+num2
// const num=(num1, num2)=>(num1+num2)
// const num=(num1, num2)=>(name='priya')
const num=()=>({name:'priya'})

console.log(num());


// const array = [1,2,4,32,6]
// array.foreach()
