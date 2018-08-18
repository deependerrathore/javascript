/*****************************
* Truthy and Falsy values and equality operator
*/

//Falsy: undefined, null, 0 , '', NaN
//Truthy: all other values

var height = 0; // Since 0 is falsy value the loop will still go to not defined

if(height || height === 0){
    console.log('Height has been defined');
    
}else{
    console.log('Height has NOT been defined');
    
}

