/*****************************
* Ternary Operator and switch statement
*/

var firstName = "Deep";
var age = 11;

//Ternary Operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');


var drink = age >= 18 ? 'beer': 'juice';

console.log(drink);
/*
if(age>= 18){
    drink = 'beer';
}else{
    drink = 'juice';
}
*/


//Switch Operator
var job = 'designer';

switch (job) {
    case 'teacher':
        console.log(firstName + ' is a good at teaching');
        break;
    case 'designer':
        console.log(firstName + ' is good at disigning new websites');
        break;
    default:
        console.log(firstName + ' is good for nothing');
        break;
}

switch (true) {
    case age < 12:
        console.log('John is a boy');
        break;
    case age >= 12 && age <20:
        console.log('John is a teenage');
        break;
    case age >= 20 && age <=30:
        console.log('John is a young man');
        break;
    default:
        console.log('John is a man');
        break;
}

/*
if(age < 12){
    console.log('John is a boy');
    
}else if (age >= 12 && age <20){
    console.log('John is a teenage');
    
}else if (age >= 20 && age <=30){
    console.log('John is a young man');
    
}else{
    console.log('John is a man');
}
*/   