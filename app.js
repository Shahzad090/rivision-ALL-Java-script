// <<<<<<<<<simple alert method>>>>>>>>>>>>

// alert("i love javaScript")
// document.write;

// variables are containers of data.. data wo jw change hoa skay usay var kahtay hai.
// or ya GLBAL  SCOOPE HOATA HAI...

// var a = 2
// var b = 3
// var c = a + b
// console.log(c) // 5

// var a = 6;
// var b = 4;
// var c = a * b;
// console.log(c);

// var a = 6;
// var b = 4;
// var c = a / b;
// console.log(c);

// <<<let say hum jw b variable banaty hai usay change kar skaty hai update  NAHI karsakty hai
// ya block scoope kahlata  hoata hai...>>>

// let firstName = "shahzad khanani";
// let age = 29;
// let city = "karachi";

// console.log(firstName);

// const say hum jw b variable banatay hai usay change nahi kar sakty block SCOOPE hoata hai
// OR NA HE USAY UPDATE KAR SKATAY HAI...

// const a = 10;

// const b = 20;

// console.log(a + b);

// premetive data types of (7)...
// 1. number
// 2. string
// 3.boolean
// 5. undefined
// 6. symbol
// 7. bigInt

// <<<<<<<<NOW START OBJECT...>>>>>>>>>>

// const student = {
//   fullName : "shahzad",
//   age : 30,
//   marks : 80,
// };

// is tarha value chnage bhi hoa sakti hai object mai
// student ["fullName"] = "shahzad khanani"
// student ["age"] = student ["age"] + 1

// console.log(student);

// <<.......... CHAPTER 2  ..........>>

// Artimetic Operators
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b,);
// console.log("a + b =", a + b); //7
// console.log("a - b =", a - b); //3
// console.log("a * b =", a * b); //10
// console.log("a % b =", a % b); //1
// console.log("a / b =", a / b); //2.5
// console.log("a ** b =", a ** b); //25
// a++ //6
// console.log("a = ",a);
// a--
// console.log("a-- = ",a--); //nt Opera

// <<<<<<<<<<<Assignment Operator>>>>>>>>>>

// let a = 5;
// let b = 2;

// a += 4; // a = a(5) + 4 = 9
// a -= 4; // a = a(5) - 4 = 1
// a /= 4; // a = a(5) / 4 = 1
// a *= 4; // a = a(5) * 4 = 625

// console.log("a += 4 =", a);
// console.log("a -= 4 =", a);
// console.log("a /= 4 =", a);
// console.log("a *= 4 =", a);

// <<<<<<<<<<Comparison Operator>>>>>>>>>>

// let a = 5;
// let b = 2;

// console.log("5 == 2", a == b); // false bcz not equal
// console.log("5 == 5", a == b); // true bcz is equal
// console.log("5 != 2", a != b); // true bcz is  not equal

// let a = 5;
// let b = 3;

// console.log("a == b", a == b); // true islie aya string kw number mai covert karta h javaScript or ya equal hoarhy h
// console.log("a === b", a === b); // triple eziqual two number kai sth value b chek karta hai islie aya flase
// console.log("a !== b", a !== b); //or ya double equal 2 ki terha kaam karta hai isliye aya true.

// console.log("5 > 3", a > b); // true bcz a is greater than
// console.log("5 < 3", a < b); // flase bcz a is less than

// let a = 5;
// let b = 6;

// console.log("5 <= 5", a <= b); // true aega
// console.log("5 >= 6", a >= b); // true aega

// <<<<<<<<<<<Logical Operators>>>>>>>>>

// let a = 6;
//  let b = 5;

//  let cond1 = a > b; // true
//  let cond2 = a === 6;

// console.log("cond1 && cond2 = ", cond1 && cond2);

// let a = 6;
//  let b = 5;

// let cond1 = a < b; // false
//  let cond2 = a === 6;

// console.log("cond1 && cond2 = ", cond1 && cond2);

// let a = 6;
//  let b = 5;

// let cond1 = a < b; //
//  let cond2 = a === 6;

// console.log("cond1 || cond2 = ", cond1 || cond2);

// let a = 6;
//  let b = 5;

// let cond1 = a < b; // false
//  let cond2 = a === 6;

// console.log("(6 < 5) = ", !(a < b)); // true

// <<<<<<<<<<<<<<<<<<<<<<<<CONDITIONAL STATEMENTS>>>>>>>>>>>>

// let age = 16;

// if (age >= 18) {
//     console.log("You can vote");
// }

// if (age < 18) {
//     console.log("You cannot vote");
// }

// let mode = "dark";
// let  color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color); // black result

// let mode = "light";
// let  color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }

// console.log(color); // white result

// let age = 25

// if (age >= 18) {
//     console.log("vote");
// } else {
//     console.log("no vote");
// }

// <<<<<<<<<<<   ODD & EVEN NUMBERS CHECK >>>>>>>>>>>

// let num = 10;

// if (num % 2 === 0) {
//     console.log(num, "is Even");
// } else {
//     console.log(num, "is odd");
//                         //  answer is EVEN

// let num = 15;

// if (num % 2 === 0) {
//     console.log(num, "is Even");
// } else {
//     console.log(num, "is odd");
// }                 answer is ODD

// <<<<<<if and if else and else condition chek and practice how do work>>>>>>>

// let mode = "dark";
// let color;

// if (mode === "dark") {
//   color = "black";
// } else if (mode === "pink") {
//   color = "pink";
// } else if (mode === "blue") {
//   color = "blue";
// } else {
//   color = "white";
// }

// console.log(color); // black result

// let mode = "silver";
// let color;

// if (mode === "dark") {
//     color = "black";
//   } else if (mode === "pink") {
//     color = "pink";
//   } else if (mode === "blue") {
//     color = "blue";
//   } else {
//     color = "white";
//   }

//   console.log(color); //  white result

// <<<<<<<, TERNARY OPERATORS >>>>>>>>>>>
//(simpler , compact if-else)

// let age = 25;

// let result = age > 18 ? "adult" : "not adult";
// console.log(result); // adult result

// let age = 17;

// let result = age > 18 ? "adult" : "not adult";
// console.log(result); //not adult result

// <<<<<, SWITCH STATEMENT >>>>>>>>>>
// (PROPMT)

// let num = prompt("enter a number:");

// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is NOT a multiple of 5");
// }

// let num = prompt("enter a number:");

// if (num % 3 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {
//     console.log(num, "is NOT a multiple of 5");
// }

// let score = prompt("enter your score (0-100):");
// let grade;

// if (score >= 90 && score <= 100) {
//   grade = "A";
// } else if (score >= 70 && score <= 89) {
//   grade = "B";
// } else if (score >= 60 && score <= 69) {
//   grade = "C";
// } else if (score >= 50 && score <= 59) {
//   grade = "D";
// } else if (score >= 0 && score  <= 49) {
//   grade = "F";
// }

// console.log(grade);


///<<<<<<<<< CHAPTER 3 START NOW>>>>>>>>>>
//   (FOR LOOOOPSSS )

// for (let i = 1; i <= 5; i++)
// console.log("apna college");

// calculate sum 1 to 5
// let sum = 0;

// for (let i = 1; i <= 5; i++)
//     sum = sum + i;
// console.log("sum, ", sum);


// // calculate sum 1 to 100
// let sum = 0;
// let n = 100;

// for (let i = 1; i <= n; i++) {
//     sum = sum + i;
// }
// console.log("sum, ", sum);

//   (WHILE LOOOOPSSS )

// let i = 1;
// while (i <= 5) {
//     console.log("apna college");
//     i++;
// }


// let i = 1;
// while (i <= 10) {
//     console.log("apna college");
//     i++;
// }

// <<<<<<<<<,, DO-WHILEL LOOPS>>>>>...


