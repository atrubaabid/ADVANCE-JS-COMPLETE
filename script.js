// BASICS

// alert("Hello World");
// console.log("Hello World");
// document.write("Hello World")



//VARIABLES

// var n = 50
// let m = 50
// const o = 50




//TEMPLATE LITERALS

// let v = 5;
// let d = "string";
// let a = true;
// console.log(`Hello World ${v + ' ' + d + ' ' + a}`);
// document.write(`<h1> Hello World ${v + ' ' + d + ' ' + a} <h1/>`);
// console.log(`
//     1 MY
//     2 NAME
//     3 IS
//     4 ATRUBA`);




// DATA TYPES

//1. PRIMITIVE DATA TYPES

// let a = 10;                      //number
// let b = "Atruba"                   //string
// let c = true;                     //boolean
// let d;                              //undefined
// let e = null;                     //object       types of object
// let f=Symbol("qweerty");           //symbol

// console.log(a, typeof (a));
// console.log(b, typeof (b));
// console.log(c, typeof (c));
// console.log(d, typeof (d));
// console.log(e, typeof (e));
// console.log(f, typeof (f));



//2. NON-PRIMITIVE DATA TYPES

// let g = [10, 20, 30, 40, 50];               //Array       types of object
// console.log(g, typeof (g));


// let obj = {                                  //Object       types of object
//     name: 'Atruba',
//     class: 'Graduation'
// }
// console.log(obj, typeof (obj));



// function showdata() {                          //Function

// }

// console.log(showdata, typeof (showdata));




//CONVERT STRINGS INTO NUMBERS

//1
// let a = parseInt(prompt("Enter any number"));
// console.log(a, typeof(a));

//2
// let a = parseFloat(prompt("Enter any number"));
// console.log(a, typeof(a));

//3
// let a = Number(prompt("Enter any number"));
// console.log(a, typeof(a));

//4
// let a = +prompt("Enter any number");
// console.log(a, typeof(a));


// QUESTION:NO:1

// let name = "Atruba";
// let age = 22;
// let isStudent = true;
// console.log(`
//     Name: ${name}
//     age: ${age}
//     isStudent: ${isStudent}
//     `);

// QUESTION:NO:2

// let a=20;
// console.log(a);
// console.log(a=23);

// QUESTION:NO:3

// let b = 10;
// console.log(b);
// b=b+5
// console.log(b);
// b+=5
// console.log(b);

// QUESTION:NO:4

// let a=5;
// let b=10;
// let temp=a
// console.log(a=b);
// console.log(b=temp);

// QUESTION:NO:5

// console.log(`
//      1 MY
//      2 NAME
//      3 IS
//      4 ATRUBA`);




//OPERATORS AND CONDITIONAL STATEMENT

// 1. ARITHMETIC OPERATORS

// let a=10;
// let b=20;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(a++);
// console.log(a--);


// 2. ASSIGNMENT OPERATORS

// let n=5;
// console.log(n+=2);
// console.log(n-=2);
// console.log(n*=2);
// console.log(n/=2);
// console.log(n%=2);

// 3. COMPARISION OPERATORS

// let a = 10;
// let b = 20;
// let c = 5;
// console.log(a == b);
// console.log(a != b);
// console.log(a === b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);
// console.log(a < b < c);    //true 1<c true
// console.log((a<b)+5);       //true 1+5


// 4. LOGICAL OPERATORS

// console.log(10<20 && 20>10); //give true we all cond true
// console.log(10<20 || 20>10); //give true even one cond true
// console.log(!(10!=10));  //reverse the answers


// 5. STRING OPERATORS

// console.log("Hello " + "World");
// let str = "Atruba ";
// console.log(str += "Abid");
// console.log(10 + "Abid");

// 6. TERNARY OPERATORS

// let age = +prompt("Enter your age");
// let result = (age >= 18) ? "yes" : "No";
// console.log(result);

// let num1 = +prompt("Enter Value 1");
// let num2 = +prompt("Enter Value 2");
// let result = (num1 > num2) ? num1 : num2;
// console.log(result);



// IF STATEMENT

// if (false) {
//     console.log("Atruba");
// }

// let score = 50;

// if (score == 50) {
//     console.log("Atruba");
// }



// IF-ELSE STATEMENT

// let score = 80;

// if (score < 50) {
//     console.log("Atruba");

// } else {
//     console.log("Abid");

// }


// let num1 = +prompt("Enetr any Number to checj its EVEN or ODD");
// if(num1%2===0){
//     console.log(`${num1} is even`);

// }else{
//     console.log(`${num1} is odd`);

// }


// IF ELSE-IF ELSE STATEMENT


// let GradeScore = +prompt("Enter your grade score");
// if (GradeScore >= 90) {
//     console.log("Grade A");

// } else if (GradeScore >= 75) {
//     console.log("Grade B");

// } else if (GradeScore >= 60) {
//     console.log("Grade C");

// } else {
//     console.log("Failed");

// }



// NESTED IF-ELSE STATEMENT

// let userName = "admin";
// let password = 12345;

// let userNameInput = prompt("Enetr your username");

// if (userNameInput == userName) {
//     let passwordInput = +prompt("Enter your password");
//     if (passwordInput == password) {
//         console.log("Login Succes");

//     } else {
//         console.log("incorrect password");

//     }


// } else {
//     console.log("kindly add correct username");

// }


//SWITCH CASE

// let light = "ggg";
// switch (light) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("invalid light");
//         break;


// }



// ==============================================

// let num1 = +prompt("Enter first number");
// let num2 = +prompt("Enter second number");
// let opt = prompt("what operation you want to apply +,-,*,/,%")

// switch (opt) {
//     case '+':
//         console.log(num1 + num2);
//         break;
//     case '-':
//         console.log(num1 - num2);
//         break;
//     case '*':
//         console.log(num1 * num2);
//         break;
//     case '/':
//         console.log(num1 / num2);
//         break;
//     case '%':
//         console.log(num1 % num2);
//         break;
//     default:
//         console.log("you entered invalid Operator");
//         break;

// }

// =====================================================================

// if (opt == "+") {
//     console.log(num1 + num2);

// } else if (opt == "-") {
//     console.log(num1 - num2);

// } else if (opt == "*") {
//     console.log(num1 * num2);

// } else if (opt == "/") {
//     console.log(num1 / num2);

// } else if (opt == "%") {
//     console.log(num1 % num2);

// } else {
//     console.log("you entered invalid Operator");

// }


// QUESTION 1
// let num = +prompt("Enter any number");

// if (num >= 100) {
//     console.log(` ${num} Number is Greater than 100`);

// }else{
//     console.log(` ${num} Number is Less than 100`);

// }


// QUESTION 2

// let year = +prompt("Enter to check year");

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("leap Year");

// } else {
//     console.log("Not a leap Year");

// }

// QUESTION 3

// let num = +prompt("Enter any number");

// if (num > 0) {

//     if (num % 2 === 0) {
//         console.log("Number is Even");

//     } else {
//         console.log("Number is Odd");
//     }

// } else if (num == 0) {
//     console.log("Zero");

// } else {
//     console.log("Negative Number");

// }


//PRACTICE QUESTION

// let temp = 22;
// if (temp >= 35) {
//     console.log("very hot");
// } else if (temp > 25 && temp < 35) {
//     console.log("Hot");

// } else if (temp > 15 && temp < 25) {
//     console.log("Pleasent");

// } else if (temp > 5 && temp < 15) {
//     console.log("Cold");

// } else if (temp < 5) {
//     console.log("Very Cold");

// } else {
//     console.log("Enter a valid number");

// }

//FOR LOOP
// for (i = 0; i <= 10; i++) {
//     console.log("Atruba", i);
// }

// for (i = 10; i >= 1; i--) {
//     console.log("Atruba", i);
// }

// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i, "Even");

//     } else {
//         console.log(i, "Odd");

//     }
// }


// for (i = 3; i <= 100; i+=3) {
//     console.log("Atruba", i);
// }



//WHILE LOOP

// let i = 0;

// while(i <= 10) {
//     console.log("Atruba ",i);
//     i++;
// }


//DO-WHILE LOOP

// let s = 1;
// do {
//     console.log(s);
//     s++
// } while (s <= 10)



//BREAK

// for (i = 0; i <= 10; i++) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }

//     console.log(i);
// }

//CONTINUE                  SKIP CURRENT CONDITION

// for (i = 0; i <= 10; i++) {

//     console.log(i);
//     if (i == 4 || i == 8) {
//         continue;
//     }
//     console.log(i);

// }



//FOR-OF LOOP               separate value in evry single line

// let a="atruba";
// for(let v of a){
//     console.log(v);

// }


// let b=["1r",2,3,4,5,6,7];
// for(let v of b){
//     console.log(v);

// }


//FOR-IN LOOP               its return index and key

// let b = ["1r", 2, 3, 4, 5, 6, 7];
// for (let k in b) {
//     console.log(k, b[k]);

// }


//PRACTICE

// for (i = 1; i <= 10; i++) {
//     console.log(`2 * ${i} = ${i * 2}`);

// }


// let sum = 0;

// for (i = 0; i <= 10; i++) {
//     console.log(sum = sum + i);

// }


// for (i = 1; i <= 10; i++) {
//     for (j = 1; j <= 10; j++) {
//         document.write("*");

//     }


//     document.write("<br>");


// }


// TABLES

// for (a = 1; a <= 100; a++) {
//     for (b = 1; b <= 10; b++) {
//         document.write(`${a} * ${b} = ${a * b}`);
//         document.write("<br>")

//     }

//     document.write("<br>")


// }


// for (i = 1; i <= 5; i++) {
//     for (j = 1; j <= i; j++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write(" <br>");
// document.write(" <br>");


// for (i = 5; i >= 1; i--) {
//     for (j = i; j >= 1; j--) {
//         document.write("*");
//     }
//     document.write("<br>");
// }


//PRACTICE QUESTION

// for (i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(i);

//     }
// }


// for (i = 20; i >= 1; i--) {
//     console.log(i);

// }


// =====================================================================/



// let num = +prompt("Enter any number");
// let isPrime = true;


// for (i = 2; i < num; i++) {

//     if (num % i === 0) {
//         isPrime = false;
//         break
//     }
// }


// if (isPrime) {
//     console.log("PRIME NUMBER");

// } else {
//     console.log("NOT A PRIME NUMBER");

// }

// =====================================================================/


// let num = +prompt("Enter any number");
// let addnumber = 0;

// for (i = 1; i < num; i++) {
//     if (num % i === 0) {

//         addnumber += i
//     }
// }

// console.log(addnumber);

// if (addnumber === num) {
//     console.log("PERFECT NUMBER");

// } else {

//     console.log("NOT A PERFECT NUMBER");
// }

// =====================================================================/


// let num = ;
// let reverse = 0;


// while (num > 0) {
//     let lastdigit = num % 10;
//     reverse = reverse * 10 + lastdigit;
//     num = parseInt(num / 10)


// }

// console.log(reverse);



// =====================================================================/


















































