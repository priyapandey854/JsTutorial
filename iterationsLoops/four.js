const coding=['js','python','cpp','java','html','css']

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })
// console.log(values);


const mynum= [1,2,3,4,5,6,7,8,9,10]

// const newNum=mynum.filter((num) => num>4)
// console.log(newNum);

// const newNum=mynum.filter((num) => {
//     return num>4
// })
// console.log(newNum);


// const newNums= []
// mynum.forEach((num ) =>{
//     if (num<4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);


const books=[
    {
        titel:'book1',
        genre:'History',
        publish:'1999',
        edition:'2000'
    },
    {
        titel:'book2',
        genre:'non history',
        publish:'1987',
        edition:'2001'
    },
    {
        titel:'book3',
        genre:'sicence',
        publish:'1990',
        edition:'2006'
    },
    {
        titel:'book4',
        genre:'History',
        publish:'1080',
        edition:'2013'
    }
    
]
let newBook=books.filter((bk) => bk.genre==='History')
newBook=books.filter((bk) => {
    return bk.publish <= 2000 && bk.genre==='History'
})
console.log(newBook);

