//Function constructor

var john = {
    name: 'john',
    yearOfBirth: 1990,
    job: 'teacher'
}

var Person = function(name,yearOfBirth,job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2018 - yearOfBirth);
    }
}

var john = new Person('john',1991,'Teacher');
var mark = new Person('mark',1980,'Designer');
var jane = new Person('jane',1963,'Retired');

john.calculateAge();
mark.calculateAge();
jane.calculateAge();
