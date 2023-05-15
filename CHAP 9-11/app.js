// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var cityName = prompt("Enter the city name:");
//     if (cityName.toLowerCase() === "karachi") {
//         document.write("<h2>Welcome to the city of lights</h2>");
//     }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender (male or female):");
// if (gender.toLowerCase() === "male") {
//   document.write("<h2>Good Morning Sir</h2>");
// } else if (gender.toLowerCase() === "female") {
//   document.write("<h2>Good Morning Ma'am</h2>");
// } else {
//   document.write("<h2>Invalid gender</h2>");}

//   3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var color = prompt("Enter the color of the traffic signal (red, yellow, or green):");

//     color = color.toLowerCase();
    
//     if (color === "red") {
//       document.write("<h2>STOP! The signal is red.</h2>");
//     } else if (color === "yellow") {
//       document.write("<h2>GET READY! The signal is yellow.</h2>");
//     } else if (color === "green") {
//       document.write("<h2>GO! The signal is green.</h2>");
//     } else {
//       document.write("<h2>Invalid color</h2>");
//     }

//     4. Write a program to take input remaining fuel in car (in
//         litres) from user. If the current fuel is less than 0.25litres,
//         show the message “Please refill the fuel in your car”

// var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");
// if (remainingFuel < 0.25) {
//     document.write("<h2>Please refill the fuel in your car</h2>");
// } else {
//     document.write("<h2>You have enough fuel in your car</h2>");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var subject1Marks = (prompt("Enter marks obtained in Subject 1:"));
// var subject2Marks = (prompt("Enter marks obtained in Subject 2:"));
// var subject3Marks = (prompt("Enter marks obtained in Subject 3:"));

// var totalMarks = (prompt("Enter total marks:"));

// var obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
// var percentage = (obtainedMarks / totalMarks) * 100;

// var grade;
// if (percentage >= 80) {
//   grade = "A+";
// } else if (percentage >= 70) {
//   grade = "A";
// } else if (percentage >= 60) {
//   grade = "B";
// } else if (percentage >= 50) {
//   grade = "C";
// } else if (percentage >= 40) {
//   grade = "D";
// } else {
//   grade = "Fail";
// }

// document.write("<h2>Percentage: " + percentage + "%</h2>");
// document.write("<h2>Grade: " + grade + "</h2>");

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.


// var secretNumber = Math.floor(Math.random() * 10) + 1;

//     var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

//     if (userGuess === secretNumber) {
//       document.write("<h2>Bingo! Correct answer</h2>");
//     } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//       document.write("<h2>Close enough to the correct answer</h2>");
//     } else {
//       document.write("<h2>Wrong answer. The secret number was: " + secretNumber + "</h2>");
//     }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//  var number = parseInt(prompt("Enter a number:"));

//  if (number % 3 === 0) {
//    document.write("<h2>The number " + number + " is divisible by 3</h2>");
//  } else {
//    document.write("<h2>The number " + number + " is not divisible by 3</h2>");
//  }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var number = parseInt(prompt("Enter a number:"));
//     if (number % 2 === 0) {
//       document.write("<h2>The number " + number + " is even</h2>");
//     } else {
//       document.write("<h2>The number " + number + " is odd</h2>");}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temperature = (prompt("Enter the temperature:"));

// if (temperature > 40) {
//   document.write("It is too hot outside.");
// } else if (temperature > 30) {
//   document.write("The Weather today is Normal.");
// } else if (temperature > 20) {
//   document.write("Today's Weather is cool.");
// } else if (temperature > 10) {
//   document.write("OMG! Today's weather is so Cool.");
// } else {
//   document.write("Temperature is too low.");
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = (prompt("Enter the first number:"));
var secondNumber = (prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
  document.write("Invalid operation");
}
document.write("Result: " + result);