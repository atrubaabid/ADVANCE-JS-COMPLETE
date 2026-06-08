//EVENTS, DELEGATION & EVENT BUBBLING

//MOUSE EVENTS

// click        = Single Click
// dbclick      = Double Click
// contextmenu  = Right Click
// mouseenter   = When mouse enters element
// mouseleave   = When mouse leaves element
// mousemove    = Mouse movements
// mousedown    = Mouse button pressed
// mouseup      = Mouse button released


// let mainDiv = document.querySelector(".main");

// //MOUSEENTER
// mainDiv.addEventListener("mouseenter", () => {
//     mainDiv.style.backgroundColor = "green"
// })

// //MOUSELEAVE
// mainDiv.addEventListener("mouseleave", () => {
//     mainDiv.style.backgroundColor = "blue"
// })

// //CONTEXTMENU
// mainDiv.addEventListener("contextmenu", () => {
//     console.log("hey");
//     mainDiv.innerHTML = "<h1>Hello Atruba<h1/>"

// })

// //MOUSEMOVE
// mainDiv.addEventListener("mousemove", () => {
//     mainDiv.innerHTML = "<h1>Mouse Move<h1/>"
// })

// //MOUSEDOWN
// mainDiv.addEventListener("mousedown", () => {
//     mainDiv.innerHTML = "<h1>Mouse Down<h1/>"
// })

// //MOUSEUP
// mainDiv.addEventListener("mouseup", () => {
//     mainDiv.innerHTML = "<h1>Mouse Up<h1/>"
// })


// =======================================================

//KEYBOARD EVENTS

// keydown    = when key pressed its worked
// keyup      = when key pressed then released its worked

// let mainDiv = document.querySelector(".main");

//KEYDOWN
// mainDiv.addEventListener("keydown", () => {
//         console.log("Atruba");
// })


// KEYUP
// mainDiv.addEventListener("keyup", () => {
//     console.log("Atruba");
// })



// =======================================================


// FORM EVENTS


// =======================================================

// WINDOW EVENTS


// LOAD
// let mainDiv = document.querySelector(".main");
// window.addEventListener("load", () => {
//     mainDiv.style.display = "block"
// })


// =======================================================

// EVENT OBJECT

// let mainDiv = document.querySelector(".main");


// mainDiv.addEventListener("click", (e) => {
//     console.log(e.type);
//     console.log(e.target); //which element clicked
//     console.log(e.currentTarget); //which element selected like mainDiv
//     console.log(e.clientX);
//     console.log(e.clientY);
// })


// =======================================================

// EVENT DELEGATION

// let mainDiv = document.querySelector(".main");


// mainDiv.addEventListener("click", (e) => {

//     console.log("ousidediv");  //when you click parent its work

//     if (e.target.tagName == "BUTTON") {
//         console.log("Atruba"); //when you click button then this work

//     }

// })

// =======================================================

//EVENT BUBBLING WITH STOP PROPAGATION


















