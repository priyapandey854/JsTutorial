//conditonal statement
//if
//<,>,<=,>=,==,===,!=,
usernam='priya'
// if (2!=3) {
//     console.log('yes');
    
// }

const temperature=60
// if (temperature>70) {
//     console.log('excuted');
//    }
// else{
//     console.log('not executed');
    
// }

const score=300
if (score<=300) {
    let name='priya'
    // console.log('this is my name :',name);  
    // console.log(`hello dear : ${name}`);
     
}
else{
    console.log('not');
    
}

const balance=5000
// if (balance>1000) console.log('true');

// else if  nesting conditions
// if (balance>500) {
//     console.log('balance is less then 500');
// }else if (balance>1000) {
//     console.log('less then 1000');
    
// }else if (balance<=5000) {
//     console.log('executed');
    
// }else{
//     console.log('not executed');
    
// }

const userLoggedIn=true
const debitCard=true
const loggedFormGoogle=false
const loggedFormEmail=true
// && (and statement), || (or statement)
if (userLoggedIn&&debitCard && 2==2) {
    console.log('allow to buy course');
    
}
else{
    console.log('not allow');
    
}
if (loggedFormGoogle||loggedFormEmail ) {
    console.log('user logged in');   
}
