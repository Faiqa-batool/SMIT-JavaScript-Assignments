// Question 1:

// let input = prompt("Enter character") ;
// let asciiCode = input.charCodeAt(0);
// if (asciiCode >= 48 && asciiCode <= 57) {
//     document.write("The input is a number");
// } else if (asciiCode >= 65 && asciiCode <= 90) {
//     document.write("The input is an uppercase letter");
// } else if (asciiCode >= 97 && asciiCode <= 122) {
//     document.write("The input is a lowercase letter");
// } else {
//     document.write("The input is not a number or letter");
// }

// Question 2:

// let num1 = +prompt("Enter 1st integer:");
// let num2 = +prompt("Enter 2nd integer:");
// if(num1>num2){
//     document.write("The larger number is " + num1);
// }
// else if(num2>num1){
//     document.write("The larger number is " + num2);
// }
// else{
//     document.write("Both numbers are equal");
// }

// Question 3:

// let num3 = +prompt("Enter a number :");
// if(num3>0){
//     document.write(num3 + " is positive");
// }
// else if(num3<0){
//     document.write(num3 + " is negative");
// }
// else{
//     document.write(num3 + " is zero");
// }

// Question 4:

// let value = prompt("Enter a character:");
// function isVowel(char) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   return vowels.includes(char.toLowerCase());
// }
// if (value.length === 1) {
//   let result = isVowel(value);
//   document.write(result);
// } else {
//   document.write("Invalid input. Please enter a single character.");
// }

// Question 5:

// let password = "abcd";
// let userInput = prompt("Enter a password:");
// if (userInput == ""){
//     alert("Please enter your password");
// }
// else if (userInput == password){
//     alert("Correct! The password you entered matches the original password")
// }
// else{
//     alert("Incorrect password");
// }

// Question 6:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
// document.write(greeting);

// Question 7:

let time = prompt("Enter time:");
if(time>=0000 && time<1200){
    alert("Good Morning!");
}
else if(time>=1200 && time<1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good Evening!");
}
else{
    alert("Good Night!");
}