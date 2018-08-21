/*
* Borrowing method - THIS is invoked when method is getting called
*/
var john = {
    firstname: 'deepak',
    yearBirth: 1992,
    calAge: function(){
        console.log(2018 - this.yearBirth);
    }
}

var mark = {
    firstname: 'mark',
    yearBirth: 1960
}

mark.calAge = john.calAge;

mark.calAge();