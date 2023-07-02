// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// const character = prompt("Enter a character:");
// const charCode = character.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//   console.log("Number");
// } else if (charCode >= 65 && charCode <= 90) {
//   console.log("Uppercase letter");
// } else if (charCode >= 97 && charCode <= 122) {
//   console.log("Lowercase letter");
// } else {
//   console.log("Invalid input");
// }


// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// const num1 = (prompt("Enter the first integer:"));
// const num2 = (prompt("Enter the second integer:"));

// if (num1 > num2) {
//   console.log("The larger number is: " + num1);
// } else if (num1 < num2) {
//   console.log("The larger number is: " + num2);
// } else {
//   console.log("Both numbers are equal.");
// }

// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// const num = prompt("Enter a number:");

// if (num > 0) {
//   console.log("The number is positive.");
// } else if (num < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }

// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

// const character = prompt("Enter a character:").toLowerCase();

// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//     console.log("The character is a vowel.");
// } 
// else {
//   console.log("The character is not a vowel.");
// }

// . Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise

// const correctPassword = "secret123";

// const userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   console.log("Please enter your password.");
// } 
// else if (userPassword === correctPassword) {
//   console.log("Correct! The password you entered matches the original password.");
// }
// else {
//   console.log("Incorrect password.");
// }

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
//   console.log(greeting)
// } 
// else if (hour > 18) {
//   greeting = "Good evening";
//   console.log(greeting)
// }

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

const time = prompt("Enter the time (in 24-hour format):");

if (time >= 0 && time <= 1200) {
    console.log("Good Morning");
}
else if (time >= 1200 && time <= 1700) {
    console.log("Good Afternoon");
}
else if (time >= 1700 && time <= 2100) {
    console.log("Good Evening");
}
else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
}

