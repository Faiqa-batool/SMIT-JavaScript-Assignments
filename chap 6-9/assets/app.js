// Question 1:

// let num = +prompt("Enter a number: ");
// let num1 = ++num;
// let num2 = num++;
// let num3 = --num;
// let num4 = num--;
// document.write("Result: <br> The value of a is: " + num + "<br> .......................................................<br>");
// document.write ("<br> The value of ++a is: " + num1 + "<br> Now the value of a is: " + num1 );
// document.write (" <br><br> The value of a++ is: " + num2 + "<br> Now the value of a is: " + ++num2 );
// document.write (" <br><br> The value of --a is: " + num3 + "<br> Now the value of a is: " +num3);
// document.write (" <br><br> The value of a-- is: " + num4 + "<br> Now the value of a is: " + --num4);

// Question 2:

// var a = 2, b = 1;
// var a1 = --a;
// var b1 = --b;
// var b2 = ++b;
// var b3 = b--;
// var result = a1 - b1 + b2 + b3;
// document.write("--a is " + (a1));
// document.write("<br>--a - --b is " + (a1 - b1));
// document.write("<br>--a - --b + ++b is " + (a1 - b1 + b2));
// document.write("<br>--a - --b + ++b + b-- is " + result);

// Question 3:

// let yourName = prompt("Enter Your Name:");
// alert("Welcome " + yourName);

// Question 5:

// let number = +prompt("Enter a number:");
// if (isNaN(number)) {
//   number = 5;
// }
// document.write("<h2>Table of " + number + "</h2>");
// for (let i = 1; i <= 10; i++) {
//   document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// Question 6:

const sub1 = prompt("Enter 1st subject:");
const obtainedMarks1 = +prompt("Enter obtained marks of " + sub1);
const sub2 = prompt("Enter 2nd subject:");
const obtainedMarks2 = +prompt("Enter obtained marks of " + sub2);
const sub3 = prompt("Enter 3rd subject:");
const obtainedMarks3 = +prompt("Enter obtained marks of " + sub3);
const totalMarks = 300;
const marks = obtainedMarks1+obtainedMarks2+obtainedMarks3;
const percentage1 = (obtainedMarks1*100)/100;
const percentage2 = (obtainedMarks2*100)/100;
const percentage3 = (obtainedMarks3*100)/100;
const percentage = (marks*100)/totalMarks;
document.write("<table>");
document.write("<tr>");
document.write("<td><h4> Subjects</h4> </td>");
document.write("<td><h4> Total Marks</h4> </td>");
document.write("<td><h4> Obtained Marks</h4> </td>");
document.write("<td><h4> Percentage</h4> </td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + sub1 +"</td>");
document.write("<td> 100 </td>");
document.write("<td>" + obtainedMarks1 + "</td>");
document.write("<td>" + percentage1 + "%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + sub2 +"</td>");
document.write("<td> 100 </td>");
document.write("<td>" + obtainedMarks2 + "</td>");
document.write("<td>" + percentage2 + "%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td>" + sub3 +"</td>");
document.write("<td> 100 </td>");
document.write("<td>" + obtainedMarks3 + "</td>");
document.write("<td>" + percentage3 + "%</td>");
document.write("</tr>");
document.write("<tr>");
document.write("<td> </td>");
document.write("<td> <h4>" + totalMarks + "</h4></td>");
document.write("<td><h4>" + marks + "</h4></td>");
document.write("<td><h4>" + percentage + "%</h4></td>");
document.write("</tr>");
document.write("</table>");