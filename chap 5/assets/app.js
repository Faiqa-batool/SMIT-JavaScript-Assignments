// Question 1:

// let num1 = +prompt("Enter 1st number: ");
// let num2 = +prompt("Enter 2nd number: ");
// document.write("Sum of " + num1 + " and " + num2 + " is " + (num1+num2));

// Question 2:

// Subtraction

let num3 = +prompt("Enter 1st number: ");
let num4 = +prompt("Enter 2nd number: ");
document.write("Subtraction of " + num3 + " and " + num4 + " is " + (num3-num4));

// Multiplication

let num5 = +prompt("Enter 1st number: ");
let num6 = +prompt("Enter 2nd number: ");
document.write("Product of " + num5 + " and " + num6 + " is " + (num5*num6));

//  Division

let num7 = +prompt("Enter 1st number: ");
let num8 = +prompt("Enter 2nd number: ");
document.write("Division of " + num7 + " and " + num8 + " is " + (num7/num8));

// Modulo

let num9 = +prompt("Enter 1st number: ");
let num10 = +prompt("Enter 2nd number: ");
document.write("Modulo of " + num9 + " and " + num10 + " is " + (num9%num10));

// Question 3:

let var1;
document.write("Value after variable declaration is: " + var1 + "<br>");
var1 = 24;
document.write("Initial value: " + var1 + "<br>");
var1++;
document.write("Value after increment is: " + var1 + "<br>");
var1 = var1 + 7;
document.write("Value after addition is : " + var1 + "<br>");
var1--;
document.write("Value after decrement is : " + var1 + "<br>");
var1 = var1 % 3;
document.write("The remainder is : " + var1 + "<br>");

// Question 4:

// let ticket = 600;
// let numOfTicket = 5;
// document.write("Total cost to buy "+ numOfTicket + " tickets to a movie is " + (ticket*numOfTicket) + " PKR");

//  Question 5:
 
// let table = +prompt("Enter table number:");
// document.write("Table of " + table);
// for(let i=1; i<=10 ; i++){
//     document.write("<br>" + table + "x" + i + "=" + (table*i) + "<br>");
// // }

// Question 6:

// let celsius = +prompt("Enter Temperature in Celsius : ");
// let celsiusToFahrenheit = ((celsius*9/5)+32);
// document.write(celsius + "<sup>o</sup>C is " + celsiusToFahrenheit  + "<sup>o</sup>F<br>");
// let fahrenheit = +prompt("Enter Temperature in Fahrenheit :");
// let fahrenheitToCelsius = ((fahrenheit-32)*5/9);
// document.write(fahrenheit + "<sup>o</sup>F is " + fahrenheitToCelsius  + "<sup>o</sup>C");

// Question 7:

// document.write("<h1>Shopping Cart</h1>");
// let item1 = 650;
// let item2 = 100;
// let quantity1 = 3;
// let quantity2 = 7;
// let charges = 100;
// document.write("Price of item 1 is " + item1);
// document.write("<br>Quantity of item 1 is " + quantity1);
// document.write("<br>Price of item 2 is " + item2);
// document.write("<br>Quantity of item 2 is " + quantity2);
// document.write("<br>Shipping Charges " + charges);
// document.write("<br><br>Total cost of your order is " + ((item1*quantity1)+(item2*quantity2) + (charges)));

// Question 8:

// document.write("<h2>Marks Sheet</h2>");
// let marks = +prompt("Enter the obtained marks:");
// let totalMarks = +prompt("Enter the total marks:");
// let percentage = ((marks*100)/totalMarks);
// document.write("Total Marks: " + totalMarks);
// document.write("<br>Obtained Marks: " + marks);
// document.write("<br>Percentage: " + percentage + "%");

// Question 9:

// document.write("<h1>Currency in PKR</h1>");
// let dollars = 10;
// let saudiRiyals = 25;
// let rates = ((dollars*104.80) + (saudiRiyals*28));
// document.write("Total currency in PKR: " + rates);

// Question 10:

// let num11 = +prompt("Enter number:");
// let num12 = ((num11+5)*10)/2;
// document.write("Result of ((" + num11 + "+5)*10)/2 is " + num12);

// Question 11:

// document.write("<h2>Age Calculator</h2>");
// let currentYear = 2023;
// let birthYear = +prompt("Enter your birth year: ") ;
// let age = currentYear - birthYear;
// document.write("Current Year : " + currentYear);
// document.write("<br>Birth Year : " + birthYear);
// document.write("<br>Your age is : " + age);
// document.write("<br>You are either " + (age-1) + " or " + age + " years old");

// Question 12:

// document.write("<h2>The Geometrizer</h2>");
// let radius = +prompt("Enter radius value:");
// document.write("Radius of a circle is: " + radius);
// document.write("<br>The circumference is: " + (2*3.142*radius));
// document.write("<br>The area is: " + (3.142*(Math.pow(radius,2))));

// Question 13:

// document.write("<h2>The Lifetime Supple Calculator</h2>");
// let snack = prompt("Enter your Favorite snack: ");
// let currentAge = +prompt("Enter your age: ");
// let maxAge = +prompt("Enter your approximated maximum age:");
// let snackPerDay = +prompt("How many snacks do you eat a day? ");
// let snackForLifetime = (maxAge-currentAge)*snackPerDay;
// document.write("Favourite Snack: " + snack);
// document.write("<br>Current Age: " + currentAge);
// document.write("<br>Maximum Estimated Age: " + maxAge);
// document.write("<br>Amount of snacks per day: " + snackPerDay);
// document.write("<br>You will need " + snackForLifetime + " " +snack+ " to last you until the ripe old age of " + maxAge);