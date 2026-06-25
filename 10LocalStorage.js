// LOCAL-STORAGE


// its one of the browser feature for storing the data persistently on the client-side----------------data is saved as key-value pairs------------no exipation date---------stays until deleted-------------size limit 5-10 MB (varies by browser)-----------when you clear your browser history all data will be deleted


// LOCAL-STORAGE-METHODS------------------------------------------------------------------------------------




// 1
// Store data
// localStorage.setItem("username", "Atruba")

// 2
// get data
// console.log(localStorage.getItem("username"));


// 3
// remove specific item data from history
// localStorage.removeItem("Time");


// 4
// remove all history
// localStorage.clear();


// 5
// get key name by index
// localStorage.key(0);









// =================================================================================

// PRACTICE



// let body = document.querySelector("body");
// let allbtns = document.querySelectorAll("button");

// allbtns.forEach((btn) => {
//     btn.addEventListener("click", () => {

//         localStorage.setItem("ColorTheme", btn.innerHTML.toLocaleLowerCase());

//         localStorage.setItem("Time", new Date().toLocaleTimeString())

//         showBodyColor();


//         console.log(localStorage.key(1));



//         // let color = localStorage.getItem("ColorTheme");
//         // body.style.backgroundColor = color;

//     })
// })


// localStorage.removeItem("Time");

// localStorage.clear();


// let showBodyColor = () => {
//     let color = localStorage.getItem("ColorTheme");
//     body.style.backgroundColor = color;
// }





// =====================================================================================


// STORING-OBJECTS-IN-LOCAL-STORAGE

let user = {
    name: "Atruba",
    isStu: true
}

//JSON.stringify()                use for store array and object. this one convert your data into string and then store in local storage.

// OBJECT TO JSON
localStorage.setItem("user1", JSON.stringify(user));




// JSON.parse()                   use for export the data exactly as it is

// JSON TO OBJECT
let data = JSON.parse(localStorage.getItem("user1"));
console.log(data);














