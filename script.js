/* Loops */

var john = ['john','smith',1992,false, 'blue'];
for (let i = 0; i < john.length; i++) {
    //console.log(john[i]);
}

//this will skip for other element type i.e. string 
for (let i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') continue;
    //console.log(john[i]);
}

//this will break once it will see any element other than string
for (let i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    //console.log(john[i]);
}


//Looping in reverse
for (let i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
    if(i === 0 ) break;
}