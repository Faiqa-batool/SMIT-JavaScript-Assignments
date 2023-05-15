// Question 1:

// const city = prompt("Enter City name:");
// if (city == "karachi" || "Karachi" || "KARACHI"){
//     alert("Welcome to City Of Lights.");
// }
// else{
//     alert("Welcome to " + city);
// }

// Question 2:

// let gender = prompt("Enter your Gender:");
// if (gender == "male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Ma'am");
// }

// Question 3:

// let color = prompt("Enter traffic signal color:");
// if (color == "red"){
//          alert("Must stop");
// }
// else if (color == "yellow"){
//         alert("Ready to move");
// }
// else if (color == "green"){
//         alert("Move now");
// }
// else{
//         alert("This isn't a traffic signal color")


// Question 4:

// let fuel = +prompt("Enter remaining fuel in car (in litres): ");
// if (fuel <= 0.25){
//     document.write("Please refill the fuel in your car");
// }
// else{
//     document.write("No need of refill")
// }

// Question 5:

// a)

// var a = 4;
// if (++a === 5){
//         alert("given condition for variable a is true");
// }

// b)

// var b = 82;
// if (b++ === 83){
//         alert("given condition for variable b is true");
// }   

//c)

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

//d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// e)

// if (true){
//    alert("True");
//   }
// if (false){
//    alert("False");
//    }

// f)

// if("car" < "cat"){
//     alert("car is smaller than cat");
    // } 

// Question 6:

// let sub1 = +prompt("Enter sub1 marks:");
// let sub2 = +prompt("Enter sub2 marks:");
// let sub3 = +prompt("Enter sub3 marks:");
// let totalMarks = +prompt("Enter total marks:");
// let obtainedMarks = sub1+sub2+sub3;
// let percentage = (obtainedMarks*100)/totalMarks;
// document.write("<h2>Marks Sheet</h2>");
// document.write("<br>Total marks: " + totalMarks);
// document.write("<br>Marks obtained: " + obtainedMarks);
// document.write("<br>Percentage: " + percentage + "%");
// if (percentage >= 80){
//     document.write("<br>Grade: A1")
//     document.write("<br>Remarks: Excellent");
// }
// else if (percentage >= 70 && percentage <= 80){
//     document.write("<br>Grade: A")
//     document.write("<br>Remarks: Good");
// }
// else if (percentage >= 60 && percentage <= 70){
//     document.write("<br>Grade: B")
//     document.write("<br>Remarks: You need to improve");
// }
// else{
//     document.write("<br>Grade: Fail")
//     document.write("<br>Remarks: Sorry");
// }

// Question 7:

// let secretNumber = Math.floor(Math.random() * 10) + 1;
// console.log(secretNumber);
// let userInput = +prompt("Guess the secret number:");
// if(userInput==secretNumber){
//         alert("Bingo! Correct answer");
// }
// else if (userInput + 1 === secretNumber){
//         alert("Close enough to the correct answer");
// }
// else{
//         alert("Wrong answer");
// }

// Question 8:

// let numInput = +prompt("Enter a number : ");
// if((numInput%3)==0){
//         alert(numInput + " is divisible by 3.")
// }
// else{
//         alert(numInput + " is not divisible by 3.")
// }

// Question 9:

// let num2 = +prompt("Enter a number: ");
// if((num2%2)==0){
//         alert(num2 + " is even");
// }
// else{
//         alert(num2 + " is odd");
// }

// Question 10:

// let temperature = +prompt("Enter the temperature:");
// if(temperature>=40){
//         alert("It is too hot outside");
// }
// else if(temperature>=30 && temperature<=40){
//         alert("The Weather today is Normal");
// }
// else if(temperature>=20 && temperature<=30){
//         alert("Today's Weather is cool");
// }
// else{
//         alert("OMG! Today's weather is so Cool");
// }

// Question 11:

let num3 = +prompt("Enter first number:");
let num4 = +prompt("Enter second number:");
let oper = prompt("Enter operator:");
if(oper == "+"){
        alert("The addition of " + num3 + " and " +num4 + " is " + (num3+num4));
}
else if(oper == "-"){
        alert("The subtraction of " + num3 + " and " +num4 + " is " + (num3-num4));
}
else if(oper == "*"){
        alert("The multiplication of " + num3 + " and " +num4 + " is " + (num3*num4));
}
else if(oper == "/"){
        alert("The division of " + num3 + " and " +num4 + " is " + (num3/num4));
}
else{
        alert("Error! the operator is wrong")
}