


const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

// console.log(date1.getTime() === date2.getTime());
// Expected output: true
// console.log(date1);

var mydate=new Date()
// console.log(mydate.toString());

// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());



// new Date(value)
// new Date(dateString)
// new Date(dateObject)

// new Date(year, monthIndex)
// new Date(year, monthIndex, day)
// new Date(year, monthIndex, day, hours)
// new Date(year, monthIndex, day, hours, minutes)
// new Date(year, monthIndex, day, hours, minutes, seconds)
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

myCratedDate=new Date('02-10-2025')
// console.log(myCratedDate.toLocaleString());


let myTimaDate= Date.now()
// console.log(myTimaDate);
// console.log(myTimaDate.toString());
// console.log(Math.floor(myTimaDate/1000));



let newDate= new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());
console.log(newDate.getDay());

// `${newDate()}and the time ...`

newDate1= newDate.toLocaleString('defauld',{
    weekday: "long",
})









