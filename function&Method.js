// displayData()

// function displayData() {
//     document.write("Atruba")
// }
// displayData()
// =================================================


// function displayData() {
//     document.write("Atruba")
// }

// =================================================


// function showName(name){
//     console.log("welcome", name);


// }

// showName("Atruba")

// =================================================

// function addData(a, b) {
//     console.log(a + b);

// }

// addData(10, 20)

// =================================================


// function addData(num1,num2=1){
// console.log(num1+num2);
// }

// addData(10,20)
// addData(10)

// =================================================

// function allData(...showData){
//     console.log(...showData);

// }

// allData(10,20,33,44,55,6,"Atruba",true)

// =================================================

// function addData(num1, num2 = 1) {
//     return num1 + num2;
// }

// console.log(addData(10, 20));
// console.log(addData(10));


// =================================================

// function taxCal(price) {
//     return price * .10;

// }

// let ProductPrice = 50000;

// console.log(taxCal(ProductPrice) + ProductPrice);



// =================================================
// Anonymous Function


// let welcome = function () {
//     console.log("welcome ");

// }

// welcome();



// let welcome = function (name) {
//     console.log("welcome " + name);

// }

// welcome("Rida");

// =================================================

// CALLBACK FUNCTION

// function addData(num1, num2) {
//     return num1 + num2;
// }

// function sumData(num1, num2) {
//     return num1 - num2
// }

// function calculate(num1, num2, callback) {
//     console.log(num1);
//     console.log(num2);
//     console.log("Answer "+ callback(num1, num2));

// }

// calculate(10, 20, addData)
// calculate(20, 10, sumData)

// =================================================

// Arrow Function

// let showData=()=>{
// console.log("welcome");

// }

// showData();



// let showData=(n,m)=>{
// return n+m
// }

// console.log(showData(2,3));





// let showData=(n,m)=>n+m
// console.log(showData(2,3));




// let showData = x => x * x * x
// console.log(showData(2));


// =================================================

// VOWELS CHECK PROGRAM

// let checkVowels = (str) => {
//     let vowels = "aeiouAEIOU"
//     for (let v of str) {
//         if (vowels.includes(v)) {
//             console.log(v);

//         }

//     }

// }

// checkVowels("Atruba")


// =================================================
// FACTORIAL PROGRAM

// let factorial = (num) => {
//     let fac = 1;
//     for (i = 1; i <= num; i++) {
//         fac *= i
//     }

//     return fac


// }

// console.log(factorial(5));

// =================================================
// WORDS CHECK PROGRAM

// let wordsCheck = (str) => {


//     //in my opinion this one correct for check words

//     let res = str.split(" ");
//     let word = 0;
//     for (let v of res) {
//         if (!v == " ") {
//             word++;
//         }
//     }

//     console.log("Answer " + word);





//     //in my opinion this one is not correct for check words




//     //     let word = 1;
//     //     for (let v of str) {
//     //         // console.log(v);
//     //         if (v == " ") {
//     //             word++;
//     //         }

//     //     }

//     // console.log(word);



// }

// wordsCheck("syeda atruba abid ali            ")






// COMPLETED
