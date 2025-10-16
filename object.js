// 1.singlton

// 2. object literals

// to ye object literals hei 
const mysym= Symbol("keyvalue1")
// console.log( typeof mysym);

const JsUser={
    name:"prita",
    "full Name":"priya Pandye",
    age: 12,
    location: "prayagraj",
    Emial:"priya@19838",
    apple: true,
    lastDaye:["Monday","Saturday"],
    [mysym]:"keyvalue1"    // object ke ader symbol ko define karne ke liye [] ka use hota hei 

}
// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser.Emial);
// console.log(JsUser["apple"]);
// console.log(JsUser["full Name"]);
// console.log( typeof JsUser[mysym]);   // ye sb object ko access karne aur define karne ke tarike hei 

JsUser.Emial="priti@pandey12"
// Object.freeze(JsUser)
JsUser.Emial="BHavesh@1876"
// JsUser.name="bhavesh"
// console.log(JsUser);


// function add karte hei ab
JsUser.greeting = function() {
    console.log("hello ja user kese ho ..");
    
}
// console.log(JsUser.greeting());

JsUser.greetingTwo = function() {
    console.log(`hello ja user,${this.name} kese ho ..`);
    
}
// console.log(JsUser.greetingTwo());


// object singlton ... start
const trinderbj= new Object ()   // ye signle singlton hei 
const trinderUser= {}   //ye double singlton hei 
trinderUser.id ="13aaad"
trinderUser.name="Sakshi"
trinderUser.Emial="some@gmail.com"
// console.log(trinderUser);

const newUser={
    Emial:"new@gmail.com",
    fullUser:{
        Username:{
            Firstname:"priya",
            LastName:"pandey"
        }
    },
    Age: 21,
    value: false,

}
// console.log(newUser.fullUser.Username.Firstname);

const obj1= { 1: "a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// console.log(obj3={obj1,obj2})
const obj3= Object.assign({}, obj1, obj2,obj4)
// console.log(obj3);
const obj5={...obj1, ...obj2, ...obj4}
// console.log(obj5);



//databese se jb vule aati hei to is type se aati hei  jese ki...

const user=[  // array ke ader object define kare hei 
    {
        userid:'123abs',
        Emial: "some1@gmail.com"
    },
    {

    },
    {

    }
]
user[1].Emial
// console.log(user);
// console.log(trinderUser);
// console.log(Object.keys(trinderUser));
// console.log(Object.values(trinderUser));
// console.log(Object.entries(trinderUser));
// is sb ka jo output aayega o aaray mei aata hei .
// console.log(trinderUser.hasOwnProperty('name'));


/****** OBJECT DESTRUCTURING AND JSON API *******/

const course={
    subjectName:"Hindi",
    price:'999',
    nameinstructor:'priya',
    Emial:'priya@tmail.com'

}
// course.nameinstructor
// const {nameinstructor}= course
const {nameinstructor : instructor} =course //ise kahte hei deintructuring krna kisi bhi valur ka  
console.log(instructor);

// API
// rendomuser me api
// json formettor

// {
//     'name':'priya',
//     'email':'priti@gmail.com',
//     'id':'124'
// }

[
    {
        
    }
]














