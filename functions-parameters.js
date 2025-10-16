//besics
function saymyName(params) {
    console.log('hello');
    
}
// saymyName()
function addTwonumber(number1,number2) {
    console.log(number1+number2);
    
}
// addTwonumber(2,4)   // () ->iske adar hum arrgument dete hei  

function addTwonumber(number1,number2) {
    const result=number1+number2
    return result
    // console.log( 'result: ',result);
    // return number1+number2

}

const result=addTwonumber(2,4)
// console.log( 'result: ',result);


function loginUsermsg(Username = "sam") {
    // if (Username===undefined) {
    //     console.log("enter your username");
    //     return
    // }
    if (!Username) {
        console.log("enter your username");
        return
    }
    return `${Username} just login`
}
// console.log(loginUsermsg());  //undefined funtion 
// console.log(loginUsermsg("priya"));


/******* FUNCTIONS WITH OBJECTS  *******/
//... rest 
function calculater(val1,vale2, ...num) {
    return num
}
// console.log(calculater(200,300,400,50000));

//function mei object create karna ..
const myObj={
    id:'14476',
    userEmial:'priya@23865skafnfbi',
    prices:'999'
}
function createObject(anyObject) {
    // return anyObject.id
    //  console.log(`this is my ${anyObject.id}and my${anyObject.userEmial}and price${anyObject.prices}`);
    // console.log(`hello my name is ${anyObject.name} and password${anyObject.password}`);
    
     
}
// console.log(createObject(myObj))
// createObject(myObj)
createObject({
    name:'priya',
    password:'1385'
})

// function mei array ceate karna ..
const valueOfArray=[200,300,400005,600]
function createArray(anyarray) {
    return anyarray[1]
}
// console.log(createArray(valueOfArray));
console.log(createArray([2000,300,4000]));







