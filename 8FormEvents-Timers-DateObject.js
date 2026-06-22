// FORM-SUBMIT

// watch this file for full explanation of forms

// p-Form.html


// ============================================================================

// preventDefault()


// when you want to cancle events

// console.log("Atruba");

// let body = document.querySelector("body");
// body.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// })


// ============================================================================


// setTimeout()


// let data = () => {
//     console.log("Atruba");

// }

// setTimeout(data, 2000);


// ============================================================================


// ENQUIRY-FORM-EXAMPLE

// instead of click the btn, Div open itself after 2s / open automatic

// setTimeout(() => {
//     div.style.top = "50%"

// }, 2000)



// ============================================================================


// setInterval()  &  clearInterval()


// let c = 1;
// let data = () => {
//     if (c == 5) {
//         clearInterval(myInterval);
//     }

//     console.log(c, "Atruba");
//     c++

// }

// let myInterval = setInterval(data, 1000);


// ============================================================================

// we can write like this also


// let c = 1;
// let end = setInterval(() => {
//     if (c == 6) {
//         clearInterval(end);
//     }
//     console.log(c, "Atruba");
//     c++;

// }, 1000)


// ============================================================================


// DATE-OBJECT

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());             //2026
// console.log(date.getMonth());               //5
// console.log(date.getDate());                //22
// console.log(date.getDay());                 //1
// console.log(date.getHours());               //10
// console.log(date.getMinutes());             //50
// console.log(date.getSeconds());             //49
// console.log(date.toLocaleDateString());    // 6/22/2026
// console.log(date.toLocaleTimeString());   // 10:51:45


// DIGITAL-CLOCK


// let date = new Date();
// let clock = document.querySelector(".clock")
// clock.innerHTML = date.toLocaleTimeString();

// setInterval(() => {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();

// }, 1000)






// DIGITAL-CLOCK

// let date = new Date();

// let clock = document.querySelector(".clock");
// clock.innerHTML = date.toLocaleTimeString();

// let updateDate = () => {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();

// }
// updateDate();
// setInterval(updateDate, 1000);




// COMPLETED






























