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



/*
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

*/


//Premitive vs Objects

//Premitive
var a = 23;
var b = a;

a = 46;

console.log(a); //prints 46
console.log(b);//prints 23

//Objects

var obj1 = {
    name: 'john',
    age: 23
}
var obj2 = obj1;
obj1.age = 46;
 
console.log(obj1.age);//prints 46
console.log(obj2.age); //prints 46 as this is also referencing the same variable


//fucntions

var age = 27;

var obj1= {
    name: 'deepak',
    city: 'Sydney'
}

function change(a,b){
    a = 30;
    b.city = 'Jaipur';
}

change(age,obj1);

console.log(age);
console.log(obj1.city);


