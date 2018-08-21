/*
* HOISTING 
Learning: Hoisting will only work for function declaration not expression
 */


 /////////////////////////////////
 //Function
 ////////////////////////////////
//calculateAge(1965); //this is stored in global context before execution
//and during execution will call this

function calculateAge(year) {
    console.log(2018 - year);
    
}

//calculateAge(1991);


//retirement(1990);//this will not work and will give us a error that function retirement does not exist
var retirement = function(year){
    console.log(65 - (2018 - year));
}

//retirement(1990);

/////////////////////////////////
//VARIABLES
/////////////////////////////////

//console.log(age); // will give us undefined but if we remove the below line than than it will give us n error 
var age = 23;
console.log(age);

function foo(){
    console.log(age);//undefined
    var age = 65;
    console.log(age);
}
foo();
console.log(age);
