/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

*/
var markMassInKg = prompt("Enter Mark weigh in Kg:"); // 80KG
var markHeightInMeter = prompt("Enter Mark height in meter:"); //1.6


var johnMassInKg = prompt("Enter John weight in Kg:"); // 100KG
var johnHeightInMeter = prompt("Enter John height in meter:"); //1.95

var markBMI = markMassInKg / (markHeightInMeter * markHeightInMeter); // 29.3847566575
var johnBMI = johnMassInKg / (johnHeightInMeter * johnHeightInMeter); //26.2984878369


var isMarkBMIHigher = markBMI > johnBMI;

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is greater than John\'s');
    
}else{
    console.log('John\'s BMI is greater than Mark\'s');
}
