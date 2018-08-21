/*
* Object and Property
*/

//Object literal
var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1992,
    familyMember: ['jane', 'mark','ted'],
    isMarried: false,
    job: 'teacher'
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'driver';
john['isMarried'] = true;

console.log(john);

//new Object
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1963;
jane['lastName'] = 'smith';

console.log(jane);
