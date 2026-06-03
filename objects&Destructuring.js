// let user = {
//     name: "Atruba",
//     email: "atruba@gmail.com",
//     isStudent: true,
//     123: "LL"
// }


// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.isStudent);
// console.log(user['123']);



//ADD ANOTHER KEY IN OBJECT
// user.age = 22
// console.log(user);



//UPDATE ANOTHER KEY IN OBJECT
// user.email = "zzzzzzzzz"
// console.log(user);



//DELETE ANOTHER KEY IN OBJECT
// delete user.email
// console.log(user);

// =================================================

//WE CAN ALSO ADD KEY LIKE THIS

// let age = 22;
// let user = {
//     name: "Atruba",
//     email: "atruba@gmail.com",
//     isStudent: true,
//     123: "LL",
//     age

// }
// console.log(user);



// =================================================

// DESTRUCTURING

// let user = {
//     name: "Atruba",
//     email: "atruba@gmail.com",
//     isStudent: true,
//     123: "LL",

// }

// let { name, email } = user;
//NOW WE CAN USE THIS LIKE VARIABLE
// console.log(name, email);
// console.log(email);
// console.log(name);


// RENAME THE KEY
// let { name: Fullname } = user
// console.log(Fullname);

// =================================================

//REST OPERATOR


// let user = {
//     name: "Atruba",
//     email: "atruba@gmail.com",
//     isStudent: true,
//     123: "LL",
// }

// let { name, ...otherdetails } = user
// console.log(name);
// console.log(otherdetails);
// console.log(user);


// =================================================

// NESTED DESTRUCTURING


// let user = {
//     name: "Atruba",
//     email: "atruba@gmail.com",
//     isStudent: true,
//     myLove: {
//         car: "BMW",
//         color: "Black"
//     },
//     123: "LL",
// }

// let { myLove: { car, color } } = user
// console.log(car);
// console.log(color);


// =================================================

//BASIC ARRAY DESTRUCTURING

// let colors = ["red", "green", "blue", "black"];
// let [a, b, c] = colors
// console.log(a, b, c)



//when want to get rest of elemnts
// let [a, b, ...c] = colors
// console.log(a, b, c)




// =================================================

// SKIP ELEMENTS

// let l = [10, 20, 30, 40, 50];
// let [, , three] = l
// console.log(three);


// =================================================

//DEEP COPY

//this one update both

// let a = [1, 2, 3, 4, 5, 6];
// let b = a;
// console.log(a);
// console.log(b);
// b.push(7);
// console.log(a);
// console.log(b);


// =================================================

//SHALLOW COPY

//dont change original array

// let a = [1, 2, 3, 4, 5, 6];
// let b = [...a]
// console.log(a);
// console.log(b);
// b.push(7);

// console.log(a);
// console.log(b);

// =================================================

//PRACTICE QUESTION

// let a = [1, 2, 3, 4, 5, 6];
// let [first, , third] = a
// console.log(first, third);

// =================================================

// let user = {
//     name: "Atruba",
//     address: {
//         city: "Karachi",
//     }
// }
// let { address: { city } } = user
// console.log(city);



















