/*
Variable mutation and type coercian
*/

var firstName = 'Deepender';
var age  =27;

//Type coercian
console.log(firstName + ' ' + age);

var job, isMarried;

job = 'Teacher';
isMarried = false;

console.log(firstName + ' is ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);


//Variable mutation
age = 'twenty eight';
job = 'Engineer';


alert(firstName + ' is ' + age + ' year old ' + job + ' . Is he married? ' + isMarried);

var lastName = prompt("What is his last Name?");

console.log(firstName + ' ' + lastName);