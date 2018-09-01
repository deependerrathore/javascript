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

/*

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


*/

/*

//Passing function as an argument
var years = [1990,2005,1963,1986,2011];

function arrayCalc(arr,fn){
    arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

function isLegalAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <=81){
        return Math.round(206.9 - (0.67 *el));
    }else{
        return -1;
    }
    
}
var ages = arrayCalc(years,calculateAge);
console.log(ages);

var legalAges = arrayCalc(ages,isLegalAge);
console.log(legalAges);

var rates = arrayCalc(ages,maxHeartRate);
console.log(rates);

*/

/*
//Function return functions
function interviewQuestion(job) {
    if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach '+ name);
            
        }
    }else if( job === 'designer'){
        return function(name){
            console.log(name +', Can you please tell me what is the meaning of UX design');
        }
    }else{
        return function(name){
            console.log('Hello '+ name +', Could you please tell me what do you do?');
            
        }
    }
}

var teacherQuestions = interviewQuestion('teacher');

teacherQuestions('john');

interviewQuestion('designer')('deepak');

interviewQuestion()('rinku');



*/

/*
//Immediately invoked function expression - IIFE

//NORMAL WAY
function game() {
    var score = Math.random() * 10;
    console.log(score >=5);
}
game();

//IIFE without argument

(function(){
    var score = Math.random() * 10;
    console.log(score >=5);
})();

//IIFE with argument
(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >=(5-goodLuck));
})(3);

*/

/*

// CLOSURES

function retirement(retirementAge){
    var a = ' years left untile retirement';
    return function(yearOfBirth){
        var age= 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementUS = retirement(66);
var retirementIN = retirement(65);
var retirementICE = retirement(67);

retirementUS(1990);
retirementIN(1990);
retirementICE(1990);

//retirement(66)(1991);


//INTERVIEW QUESTIONS without CLOSURE
function interviewQuestion(job) {
    if(job === 'teacher'){
        return function(name){
            console.log('What subject do you teach '+ name);
            
        }
    }else if( job === 'designer'){
        return function(name){
            console.log(name +', Can you please tell me what is the meaning of UX design');
        }
    }else{
        return function(name){
            console.log('Hello '+ name +', Could you please tell me what do you do?');
            
        }
    }
}




//INTERVIEW QUESTIONS with CLOSURE

function interviewQuestion(job){
    return function(name){
        if(job ==='teacher'){
            console.log('What subject do you teach '+ name);

        }else if(job === 'designer'){
            console.log(name +', Can you please tell me what is the meaning of UX design');

        }else{
            console.log('Hello '+ name +', Could you please tell me what do you do?');

        }
    }
}

interviewQuestion('teacher')('john');

*/


//Bind, call and apply

var john = {
    name: 'john',
    age: 26,
    job: 'teacher',
    persentation: function(style, timeOfDay){
        if(style ==='formal'){
            console.log('Good '+ timeOfDay+ ', Ladies and Gentlemen! I\'m '+this.name+' I\'m a ' +this.job+ ' I\'m '+ this.age+' years old');
        }else if(style ==='friendly'){
            console.log('Whats up guys I\'m '+this.name+' I\'m a ' +this.job+ ' I\'m '+ this.age+' years old. Have a nice ' + timeOfDay);
            
        }
    }
}

var emily ={
    name:'emily',
    age: 35,
    job: 'teacher'
}

john.persentation('formal','morning'); 

john.persentation.call(emily,'friendly','afternoon');

//will see apply funciton alter
//john.persentation.apply(emily,['friendly','afternoon']);