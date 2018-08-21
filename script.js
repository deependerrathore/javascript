/*
* Functions
*/

function calculateAge(birthyear) {
    return 2018 - birthyear;
}

var ageJohn = calculateAge(1992);
var ageMark = calculateAge(1950);
var ageJane = calculateAge(1999);

console.log(ageJohn , ageMark,ageJane);

function ageUntilRetirement(firstname,year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstname + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstname + ' is already retired');
    }
    
}

ageUntilRetirement('john',1992);
ageUntilRetirement('mark',1950);
ageUntilRetirement('jane',1999);