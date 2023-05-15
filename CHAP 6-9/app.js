// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let variable1 = 10;
// document.write("The value of a is: " + variable1);
// variable1++;
// document.write("The increment of a is: " + variable1);
// variable1++;
// document.write("The increment of a is: " + variable1);
// variable1--;
// document.write("The decrement of a is: " + variable1);
// variable1--;
// document.write("The derement of a is: " + variable1);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write(a);
// document.write(b);
// document.write(result);

// 3. Write a program that takes input a name from user &
// greet the user.

//  var name = prompt("Enter your name:");
//  var greeting = "Hello, " + name + "! Welcome!";
//  alert(greeting);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var number = prompt("Enter a number:");
//     if (number === null || number === "") {
//       number = 5; 
//     }

//   var result1 = number * 1;
//   var result2 = number * 2;
//   var result3 = number * 3;
//   var result4 = number * 4;
//   var result5 = number * 5;
//   var result6 = number * 6;
//   var result7 = number * 7;
//   var result8 = number * 8;
//   var result9 = number * 9;
//   var result10 = number * 10;
    
//   document.write("<h2>Multiplication Table of " + number + "</h2>");
//   document.write(number + " x 1 = " + result1 + "<br>");
//   document.write(number + " x 2 = " + result2 + "<br>");
//   document.write(number + " x 3 = " + result3 + "<br>");
//   document.write(number + " x 4 = " + result4 + "<br>");
//   document.write(number + " x 5 = " + result5 + "<br>");
//   document.write(number + " x 6 = " + result6 + "<br>");
//   document.write(number + " x 7 = " + result7 + "<br>");
//   document.write(number + " x 8 = " + result8 + "<br>");
//   document.write(number + " x 9 = " + result9 + "<br>");
//   document.write(number + " x 10 = " + result10 + "<br>");

//   6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// ALERTS | JAVASCRIPT
// Page 3 of 3
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject1 = prompt("Enter subject 1 name:");
var subject2 = prompt("Enter subject 2 name:");
var subject3 = prompt("Enter subject 3 name:");

// Define total marks for each subject
var totalMarks = 100;

// Prompt the user for obtained marks for each subject
var obtainedMarks1 = prompt("Enter obtained marks for " + subject1 + ":");
var obtainedMarks2 = prompt("Enter obtained marks for " + subject2 + ":");
var obtainedMarks3 = prompt("Enter obtained marks for " + subject3 + ":");

// Convert obtained marks to numbers
obtainedMarks1 = parseFloat(obtainedMarks1);
obtainedMarks2 = parseFloat(obtainedMarks2);
obtainedMarks3 = parseFloat(obtainedMarks3);

// Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table format
document.write("<h2>Subject Marks</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");