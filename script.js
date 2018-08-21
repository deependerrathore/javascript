/*
* Function Statements and Expressions
*/


//Function declaration
// function whatDoYouDo(job, firstName) {}


//Function expression
var whatDoYouDo = function(job,firstName){
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in uber';
        case 'designer':
            return firstName + ' know how to design a website';
        default:
            return firstName + ' does nothing';
    }
}

console.log(whatDoYouDo('driver','john'));
console.log(whatDoYouDo('designer','mark'));
console.log(whatDoYouDo('retired','jane'));