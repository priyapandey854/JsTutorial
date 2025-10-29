// const array = [1, 2, 3, 4,5];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10


const myNum=[1,2,3,4,5,6]
// const newmun=myNum.reduce(function (accumulator,currentValue) {
//     console.log(`acc: ${accumulator} and curv:${currentValue}`);
    
//     return accumulator+ currentValue
// }, 2 )

// const newmun=myNum.reduce((accumulator, currentValue) => accumulator+currentValue,0 )
// console.log(newmun);

const shopping=[
    {
        itemName:'js course',
        price:2999,
    },
    {
        itemName:'py course',
        price:3999,
    },
    {
        itemName:'data course',
        price:4990,
    },
    {
        itemName:'mobile course',
        price:1999,
    }
]
const shop=shopping.reduce((accumulator, item) => accumulator+item.price,0 )
console.log(shop);
