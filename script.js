/*
* Arrays
*/

//Initialize new array
var names = ['john','mike','jane'];
var years = new Array(1990, 1991,1998);

console.log(names);

//Mutate new array
names[1]= 'deepak';

console.log(names);

names[names.length] = 'rinku';

console.log(names);

//Different data types
var john = ['john','smith',1992, 'teacher',false];

john.push('blue');
john.unshift('Mr.'); // add Mr. in front of the array
console.log(john);

john.pop();// remove blue
john.pop(); // remove false
john.shift(); // remove the first element
console.log(john);

console.log(john.indexOf(1992)); // returns 2

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'john is a good designer';
console.log(isDesigner);