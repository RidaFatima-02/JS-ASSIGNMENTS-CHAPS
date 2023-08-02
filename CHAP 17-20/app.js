// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
// let multidimensional_arr = [[], [], []];

// 2. Declare and initialize a multidimensional array representing the following matrix:
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// console.log(matrix);

// 3. Write a program to print numeric counting from 1 to 10.

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// 4.  Write a program to print multiplication table of any number using for loop.Table number & length should be taken as an input from user
// let user_input = prompt("Enter a number to show its multiplication table");
// let length = prompt("Enter the length of table")

// for (let i = 1; i <= length; i++) {
//     let number = user_input * i;
//     console.log(user_input, "x", i, "=", number);
// }

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log("Element at index", i, "is", fruits[i]);
// }

// 6. Generate the following series in your browser.See example output.a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 e.Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// console.log("counting");
// for (let i = 1 ; i<=15 ; i++){
//     console.log(i);
// }

// console.log("Reverse");
// for(let j=10 ; j>=1 ; j--){
//     console.log(j);
// }
// console.log("Even");
// for(let i=0 ; i<=20 ; i+=2){
//     console.log(i);
// }
// console.log("odd");
// for(let i=1 ; i<=20 ; i+=2){
//     console.log(i);
// }
// console.log("Series");
// for (let k = 1; k <= 10; k++) {
//     series += (2 * k) + "k, ";
// }

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

//  let items = ["cake", "apple pie", "cookie", "chips", "patties"];

//  let userInput = prompt("Welcome to ABC Bakery. What do you want?");

//  let found = false;
//  for (let i = 0; i < items.length; i++) {
//      if (items[i].toLowerCase() === userInput.toLowerCase()) {
//          found = true;
//          break;
//      }
//  }
//  if (found) {
//      alert("Yes, the item is found in the list.");
//  } else {
//      alert("No, the item is not found in the list.");
//  }

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
// let A = [24, 53, 78, 91, 12];
// console.log("Array:" , A);
//         let largestNumber = A[0];

//         for (let i = 1; i < A.length; i++) {
//             if (A[i] > largestNumber) {
//                 largestNumber = A[i];
//             }
//         }

//         console.log("The largest number in the array is:", largestNumber);

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
// let A = [24, 53, 78, 91, 12];
// console.log("Array:" , A);

//         let smallestNumber = A[0];

//         for (let i = 1; i < A.length; i++) {
//             if (A[i] < smallestNumber) {
//                 smallestNumber = A[i];
//             }
//         }

//         console.log("The smallest number in the array is:", smallestNumber);

// 10. Write a program to print multiples of 5 ranging 1 to 100. 
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}