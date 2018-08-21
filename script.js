/*
* Object and Methods
*/


var john = {
    firstName: 'john',
    lastName: 'smith',
    birthYear: 1955,
    familyMember: ['jane', 'mark','ted'],
    isMarried: false,
    job: 'teacher',
    calcAge: function(){
        this.age =  2018 - this.birthYear;
    }
};

console.log(john.calcAge());

john.calcAge(); 
console.log(john);