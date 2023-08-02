// 1. Declare an empty array using JS literal notation to store
// student names in future.
// let studentNames = [];s

// 2. Declare an empty array using JS object notation to store
// student names in future.
// let studentNames = { names: [] };

// 3. Declare and initialize a strings array.
// let studentNames = ["Ali" , "Sarah" , "Ahmed"];

// 4. Declare and initialize a numbers array.
// let numbers = [2, 4, 6, 8, 10];

// 5. Declare and initialize a boolean array.
// let bool = [true , false];

// 6. Declare and initialize a mixed array.
// let mixedArray = ["Ali" , 20 , true];

// . Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:7

// let qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

// document.write("<h3>Qualifications:</h3>");
// document.write("<ol>");

// for (let i = 0; i < qualifications.length; i++) {
//   document.write("<li>" + qualifications[i] + "</li>");
// }

// document.write("</ol>");

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentNames = ["Micheal", "John", "Tony"];
// let studentScore = [320, 230, 480];
// let totalMarks = 500;

// for (let i = 0; i < studentScore.length; i++) {
//     let percentage = (studentScore[i] / totalMarks) * 100;
//     document.write("Score of " + studentNames[i] + " is " + studentScore[i] + " .Percentage is " + percentage + "% <br>" );
// }

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
let colors = ["red" , "blue" , "pink" , "purple"];
// let userInput = prompt("What color you want to add in the beginning of array?");
// colors.unshift(userInput);
// console.log(colors);

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// let userInput2 = prompt("What color you want to add in the end of array?");
// colors.push(userInput2);
// console.log(colors);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// colors.unshift("brown" , "violet");
// console.log(colors);

// d. Delete the first color in the array. Display the updated
// array in your browser.
// colors.shift();

// e. Delete the last color in the array. Display the updated
// array in your browser.
// colors.pop();

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// let colorName = prompt("What color you want to add in the beginning of array?");
// let indexNo = prompt("At which position you want to add the color?");
// colors.splice(indexNo , 0 , colorName);
// console.log(colors);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your browser.
// let indexNo = prompt("Enter the index from which you want to delete color(s):");
// let numToDelete = prompt("Enter the number of colors you want to delete:");
// colors.splice(indexNo, numToDelete);
// console.log(colors);

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// let scores = [92 , 89 , 72 , 62 , 80];
// console.log("Scores of student: " , scores);

// scores.sort(function(a,b){
//     return a-b;
// });
// console.log("Ordered Scores of students:" , scores);

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
// let cities = ["karachi" , "lahore" , "islamabad" , "quetta" , "peshawar"];
// console.log(cities);
// let updated_cities = cities.slice(2,4);
// console.log(updated_cities);

// 12.  Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)
// var arr = ["This" , "is ", "my", "cat"];
// console.log(arr);
// let arr_string = arr.join();
// console.log(arr_string);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
// let devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("moniter");
// console.log("Devices: " , devices);

// let del1 = devices.shift();
// console.log("Out" , del1);
// let del2 = devices.shift();
// console.log("Out" , del2);
// let del3 = devices.shift();
// console.log("Out" , del3);
// let del4 = devices.shift();
// console.log("Out" , del4);

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
// let devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("moniter");
// console.log("Devices: " , devices);

// let del1 = devices.pop();
// console.log("Out" , del1);
// let del2 = devices.pop();
// console.log("Out" , del2);
// let del3 = devices.pop();
// console.log("Out" , del3);
// let del4 = devices.pop();
// console.log("Out" , del4);

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method: 
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<form>");
            document.write("<label for='manufacturers'>Select a Phone Manufacturer: </label>");
            document.write("<select id='manufacturers' name='manufacturers'>");
            
            // Loop through the array to add options to the dropdown
            for (let i = 0; i < manufacturers.length; i++) {
                document.write("<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>");
            }

            document.write("</select>");
            document.write("<input type='submit' value='Submit'>");
            document.write("</form>");

