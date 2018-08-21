/*
* Object and Methods
*/


var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1991,
    familyMember: ['jane', 'mark','ted'],
    isMarried: false,
    job: 'teacher',
    calcAge: function(){
        return 2018 - this.birthYear;
    }
};

console.log(john.calcAge());

john.age = john.calcAge(); // setting up the age property