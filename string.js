/**String **/
// using all string methods ////


var name="priya"
var name1="pandey"
// console.log(name+name1 ,"value");  // ye syntex sahi nhi hei likhne ka
console.log(`hello i ame is ${name} and my sir name is ${name1} the value og 50`);
// ${}  ye use hota hei veriable ingect karne ke liye

gameName= "priya"
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('r'));
console.log(gameName.charAt(2));
console.log(gameName.substring(0,3));

let nameId="      priti       "
console.log(nameId);
console.log(nameId.trim());

url = "https://priya.com/priya%30pandye"
console.log(url.replace('%30','-' ));
urlInclude= url.includes('priya')   // iska mtl jese hum pta karna chate hei ki ye true hei ki nhi mt iske adar ye name hehi ki nhi
console.log(urlInclude);



