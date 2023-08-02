// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName + " " + lastName;

// alert("Welcome!" + fullName );

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browse
// var favoriteModel = prompt("Enter your favorite mobile phone model:");
// var lengthOfInput = favoriteModel.length;

// document.write("My favorite phone is " + favoriteModel);
// document.write("Length of string: " + lengthOfInput);

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String: " + word ) ;
// document.write("Index of 'n' " + index);

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("String: " + word ) ;
// document.write("Index of l " + lastIndex);

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("String: " + word ) ;
// document.write("Character at index 3 is:" + character);

// 6. Repeat Q1 using string concat() method.
// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName = firstName.concat(" ", lastName);
// alert("Welcome!" + fullName );

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// var word = "Hyderabad";
// var replacedWord = word.replace("Hyder", "Islam");
// document.write("City: " + word);
// document.write("After Replacement: " + replacedWord);

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replacedMessage = message.replace(/and/g, "&");
// document.write("<p>Original message: " + message + "</p>");
// document.write("<p>Replaced message: " + replacedMessage + "</p>");

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var strNumber = "472";
// var convertedNumber = parseInt(strNumber);
// document.write("<p>Original string: " + strNumber + "</p>");
// document.write("<p>Type of original string: " + typeof strNumber + "</p>");
// document.write("<p>Converted number: " + convertedNumber + "</p>");
// document.write("<p>Type of converted number: " + typeof convertedNumber + "</p>");

// 10. Write a program that takes user input. Convert and show the input in capital letters.
// var userInput = prompt("Enter your text:");
// var uppercasedText = userInput.toUpperCase();
// document.write("<p>User Input: " + userInput + "</p>");
// document.write("<p>Uppercased: " + uppercasedText + "</p>");

// 11. Write a program that takes user input. Convert and show the input in title case. 
// var userInput = prompt("Enter your text:");
// var words = userInput.split(" ");
// for (var i = 0; i < words.length; i++) {
//   words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
// }

// var titleCaseText = words.join(" ");
// document.write("<p>Original input: " + userInput + "</p>");
// document.write("<p>Title case text: " + titleCaseText + "</p>");

// 12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 
// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write("<p>Original number: " + num + "</p>");
// document.write("<p>Result: " + numString + "</p>");

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 

//     Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64 

// var username = prompt("Enter your username:");
// var containsSpecialSymbols = false;
// var specialSymbols = ['@', '.', ',', '!'];
// for (var i = 0; i < username.length; i++) {
//   if (specialSymbols.includes(username[i])) {
//     containsSpecialSymbols = true;
//     break;
//   }
// }

// while (containsSpecialSymbols) {
//   username = prompt("Please enter a valid username without special symbols (@ . , !):");
//   containsSpecialSymbols = false;
//   for (var i = 0; i < username.length; i++) {
//     if (specialSymbols.includes(username[i])) {
//       containsSpecialSymbols = true;
//       break;
//     }
//   }
// }

// document.write("<p>Your username: " + username + "</p>");

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery! What do you want to order sir/Maam?");


// var isItemFound = false;
// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         isItemFound = true;
//         break;
//     }
// }
// if (isItemFound) {
//     alert(userInput + " is available at index " + A.indexOf(userInput) + " at our bakery");
// } else {
//     alert("We are sorry " + userInput + " is not available at our bakery.");
// }

// 15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
// var isValid = false;
// var userPassword = prompt("Enter your password:");

// var containsAlphabets = /[a-zA-Z]/.test(userPassword);
// var containsNumbers = /\d/.test(userPassword);
// var startsWithLetter = /^[a-zA-Z]/.test(userPassword);
// var isLengthValid = userPassword.length >= 6;

// isValid = containsAlphabets && containsNumbers && startsWithLetter && isLengthValid;

// while (!isValid) {
//     if (!isValid) {
//         document.write("<p>Entered Password: " + userPassword + "</p>");
//         if (!startsWithLetter) {
//             document.write("<p>Password must start with an alphabet</p>");
//             document.write("<p>Please enter a valid password</p>");
//             break;
//         }
//         if (!containsNumbers) {
//             document.write("<p>Password must contain numbers</p>");
//             document.write("<p>Please enter a valid password</p>");
//             break;
//         }
//         if (!containsAlphabets) {
//             document.write("<p>Password must contain alphabets.</p>");
//             document.write("<p>Please enter a valid password</p>");
//             break;
//         }
//         if (!isLengthValid) {
//             document.write("<p>Password must be at least 6 characters long.</p>");
//             document.write("<p>Please enter a valid password</p>");
//             break;
//         }
//     }
//     var containsAlphabets = /[a-zA-Z]/.test(userPassword);
//     var containsNumbers = /\d/.test(userPassword);
//     var startsWithLetter = /^[a-zA-Z]/.test(userPassword);
//     var isLengthValid = userPassword.length >= 6;
// }

// if(isValid){
//     alert("Your password is valid!");
// }

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.
// var university = "University of Karachi";
// var universityArray = university.split('');

// document.write("<p>Original String: " + university + "</p>");
// document.write("<ul>");
// for (var i = 0; i < universityArray.length; i++) {
//     if (universityArray[i] === ' ') {
//         document.write("<br>");
//     } else {
//         document.write("<li>" + universityArray[i] + "</li>");
//     }
// }
// document.write("</ul>");

// 17. Write a program to display the last character of a user input. 
// var userInput = prompt("Enter your text:");
// var lastCharacter = userInput[userInput.length - 1];

// document.write("<p>Your input: " + userInput + "</p>");
// document.write("<p>Last character: " + lastCharacter + "</p>");

var givenString = "The quick brown fox jumps over the lazy dog";
  var wordToSearch = "the";

  // Convert both the given string and the word to search to lowercase
  var lowercaseGivenString = givenString.toLowerCase();
  var lowercaseWordToSearch = wordToSearch.toLowerCase();

  // Split the given string into words using space as the separator
  var wordsArray = lowercaseGivenString.split(' ');

  // Initialize a counter for the occurrences of the word "the"
  var occurrencesCount = 0;

  // Loop through the words array and count occurrences of the word "the"
  for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === lowercaseWordToSearch) {
      occurrencesCount++;
    }
  }

  // Display the result in the browser
  document.write("<p>Given String: " + givenString + "</p>");
  document.write("<p>Occurrences of the word 'the': " + occurrencesCount + "</p>");