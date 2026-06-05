// console.log(document.body.outerHTML);
// console.log(document.head.outerHTML);
// console.log(document);
// console.log(window.document);c

// ==============================================
// SELECT ELEMENT BY ID

// let h1 = document.getElementById("heading");
// console.log(h1.outerHTML);
// console.log(h1.innerHTML);
// console.log(h1.innerText);

// let p = document.getElementById("para")
// console.log(p.outerHTML);

// ==============================================

//QUERY SELECTOR

//BY ID

// let inputName = document.querySelector("#name")
// console.log(inputName);
// let inputEmail = document.querySelector("#email")
// console.log(inputEmail);

//BY CLASS

// let inputName = document.querySelector(".name")
// console.log(inputName);
// console.log(inputName.className);
// let inputEmail = document.querySelector(".email")
// console.log(inputEmail);
// console.log(inputEmail.className);


//BY TAGNAME

// let inputName = document.querySelector("input")
// console.log(inputName);

// ==============================================

//ATTRIBUTES PRINT AND UPDATE

// let inputEmail = document.querySelector("#email")
// console.log(inputEmail);

// //Print
// console.log(inputEmail.type);
// console.log(inputEmail.placeholder);
// console.log(inputEmail.className);
// console.log(inputEmail.id);

// //update
// inputEmail.type = "password"
// inputEmail.placeholder = "Enter your email"
// inputEmail.className = "Atruba"
// inputEmail.id = "Atruba"
// console.log("");

// //final print
// console.log(inputEmail.type);
// console.log(inputEmail.placeholder);
// console.log(inputEmail.className);
// console.log(inputEmail.id);

// ==============================================

//QUERY SELECTOR ALL

// let li = document.querySelectorAll("li");
// console.log(li);

// li.forEach((li, i) => {
//     console.log(li.innerText = `item ${i}`);
// })

// ==============================================

// EVENTS

//ye onclick per kam krega

// let password = document.querySelector("#pass")
// let btn = document.querySelector("#btn")

// function showData() {
//     if (password.type == "password") {
//         password.type = "text"
//         btn.innerHTML = "Hide"
//         console.log(password.type);


//     } else {
//         password.type = "password"
//         btn.innerHTML = "Show"
//         console.log(password.type);

//     }
// }

// ==============================================

// EVENTLISTENER


// let password = document.querySelector("#pass")

// let btn = document.querySelector("#btn")
// // addEventListener with callback
// btn.addEventListener("click", showData)

// function showData() {
//     if (password.type == "password") {
//         password.type = "text"
//         btn.innerHTML = "Hide"
//         console.log(password.type);


//     } else {
//         password.type = "password"
//         btn.innerHTML = "Show"
//         console.log(password.type);

//     }
// }

// =================================================


// addEventListener with their arrow function fire

// let password = document.querySelector("#pass")

// let btn = document.querySelector("#btn")
// btn.addEventListener("click", () => {
//     if (password.type == "password") {
//         password.type = "text"
//         btn.innerHTML = "Hide"
//         console.log(password.type);


//     } else {
//         password.type = "password"
//         btn.innerHTML = "Show"
//         console.log(password.type);

//     }

// })

// =================================================

//PRACTICE EVENT LISTENER

// let h1 = document.querySelector(".h1")
// let p = document.querySelector(".p")
// let btn = document.querySelector("#btn")

// console.log(h1);
// console.log(p);

// btn.addEventListener("click", () => {
//     console.log(h1);
//     console.log(p);


//     h1Data = h1.innerHTML

//     pData = p.innerHTML


//     h1.innerHTML = pData
//     p.innerHTML = h1Data


// })

// =================================================

// CSS STYLING WITH JS

// let allh1 = document.querySelectorAll("h1")
// let allp = document.querySelectorAll("p")
// let allbtn = document.querySelectorAll("button")
// let inputs = document.querySelectorAll("input")

// let clr = document.querySelector("#clr");

// clr.addEventListener("click", () => {

//     allh1.forEach((el) => {
//         el.style.color = "red"
//     })

//     allp.forEach((el) => {
//         el.style.color = "blue"
//     })

//     allbtn.forEach((el) => {
//         el.style.backgroundColor = "yellow"
//     })

//     inputs.forEach((el) => {
//         el.style.backgroundColor = "purple"
//     })


// })


// =================================================

//ENQUIRY MODAL

// let btn = document.querySelector("#modal")
// let div = document.querySelector(".modalDiv")
// let span = document.querySelector("span")
// span.addEventListener("click", () => {
//     div.style.top = "-50%"

// })

// btn.addEventListener("click", () => {
//     div.style.top = "50%"
// })


// =================================================

//ADD ,REMOVE, TOGGLE CLASS

// let add = document.querySelector(".add")
// let remove = document.querySelector(".remove")
// let toggle = document.querySelector(".toggle")
// let name = document.querySelector(".name")

// //add
// add.addEventListener("click", () => {
//     name.classList.add("active")
// })
// //remove
// remove.addEventListener("click", () => {
//     name.classList.remove("active")
// })
// //toggle
// toggle.addEventListener("click", () => {
//     name.classList.toggle("active")
// })


// =================================================

//TASK 1










