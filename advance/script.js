//Function constructor

/*
var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}

//we can also use property in prototype
Person.prototype.lastName = 'smith';

var john = new Person('john',1991,'Teacher');
var mark = new Person('mark',1980,'Designer');
var jane = new Person('jane',1963,'Retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);
console.log(jane.lastName);

*/

//Object.create

var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
        
    }
};

var john = Object.create(personProto);

john.firstName = 'john';
john.yearOfBirth = 1992;
john.job = 'Teacher';

var jane = Object.create(personProto,{
    name: {value: 'jane'},
    yearOfBirth: {value: 1980},
    job: {value: 'Designer'}
})