"user strict"; //treat all JS code as newer version

// alert(3+3) // We are using nodejs, not browser
//number => 2 to power 53
// bigint 
// String =>""
// boolean => true/ false
// null => standalone value
// undefined =>
// symbol => unique

// object 
// console.log(typeof undefined); //  undefined hi aata hei 
// console.log(typeof null); // object type aata hei 


/* type convertion */

let num ="33 aa"
let num1= Number(num)
// console.log(typeof num1);
// console.log(num1);
// 33 => num 33
// "33abe" => NaN
// " " => NaN
// true => 1 , false => 0
// exclamation -> (!) bolte hei ise





let isloggedIn= 1
let booleanis = Boolean(isloggedIn)
// console.log(booleanis);

// 1=> true ; 0=> flase
// "" => flase
// "priya"=> true

let sum = 23
let stringsum = String(sum)
// console.log(stringsum);
// console.log(typeof stringsum);



// ********************** Operations**********************//

// console.log(2+2);
// console.log(2-1);
// console.log(2*2);
// console.log(2%2);
// console.log(2/2);
// console.log(2^2);
// let value= 3
// negvalue= -value
// console.log(negvalue);
// console.log(typeof negvalue);

str1 ="priya"
str2 =" pandye"
str3= str1+str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2 +2);
// console.log(1+2 + "2"); // ye sb tarika lagat hei 

// console.log(((3+2) *4 ) -2);

// console.log(+true);  // iska 1
// console.log(+"");  // iska convertion 0 aata hei 


/****** prefic and postfic js mdn***** */
let numb = 100
++numb;
console.log(numb);



/**************comparitions*********************/

// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2<=1);
// console.log(2>=1);

// console.log("2">1);
// console.log("02"<1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// console.log(undefined>=0);
// console.log(undefined==0);
// console.log(undefined>0);

// ***===**** ise kahte hei strict check
// ye data type bhi check karta hei ki kya o convertion hei ki nhi , 
// console.log("2"===2);
// ye isme ak string hei aur ak number hei to ,...
 
// aor ye sb convetion hum log nhi karte hei becuease hume clear code karna chahiye .


