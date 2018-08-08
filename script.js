/**
 *  Operators precedence
 * 
 *  Refernece : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
 */

 var now = 2018;
 var yearJohhn = 1989;
 var fullAge = 18;

 //Multiple operators
 var isFullAge = now - yearJohhn > fullAge; //true
 console.log(isFullAge);
 
 //Grouping
 var ageJohn = now - yearJohhn;
 var ageMark = 35;
 var avgAge = (ageJohn + ageMark)/2;
 console.log(avgAge);
 
//Multiple assignment
var x,y;
x = y = (3 + 5) * 6 + 4;// 8 * 6 + 4 //48 + 4 //52
console.log(x,y); // associativity

//More operator
x *= 4; // 52 * 4 = 208
console.log(x);

x += 10; // 208 + 10 = 218
console.log(x);

x++;
console.log(x);//219




 