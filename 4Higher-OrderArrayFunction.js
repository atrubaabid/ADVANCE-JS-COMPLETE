//MAP ARRAY


//her element pr alg alg kam kerta hy or new array return kerta hy

// let l = [10, 20, 30, 40];
// l.map((v, i) => {
//     console.log(v, i);

// })


// ==============================================



// let l = [10, 20, 30, 40];
// let finalArray = l.map((v, i) => {
//     return v + 5
// })

// console.log(finalArray);


// ==============================================


// let l = [10, 20, 30, 40];
// let finalArray = l.map((v) => v + 5)

// console.log(finalArray);


// ==============================================


// let a = [1, 2, 3];
// a.map((v) => {
//     console.log(v * v);

// })

// ==============================================
//alag arrow function bna k usko as a call-back map me pass krna

// let a = [1, 2, 3, 4, 5];
// let square = (v) => v ** v;
// let result = a.map(square);
// console.log(result);


// ==============================================

//FILTER ARRAY


//new array me hamari true conditions value filter kr k deta hy



// let a = [0, 3, , 0, 60, 9, 30, 77, 88];
//  let res = a.filter((v) => {
//     if (v % 3 === 0 && v != 0) {
//         // console.log([v]);
//         // console.log(v);
//         return v
        
//     }
// })

// console.log(res);



// ==============================================

// let data = [
//     {
//         user: "Atruba",
//         age: 22
//     },
//     {
//         user: "Rida",
//         age: 21
//     },
//     {
//         user: "Muqsit",
//         age: 20
//     },
//     {
//         user: "Mutib",
//         age: 12
//     },
//     {
//         user: "Muhib",
//         age: 10
//     },
// ];

// console.log(data);
// let res = data.filter((v) => v.age >= 18)
// console.log(res);


// ==============================================


//REDUCE ARRAY 

//ye sari values ka 1 hi answerr return kerta hy

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = a.reduce((a, b) => {
//     return a + b
// })

// console.log(res);

// ==============================================

//FIND ARRAY

//find hamesha first value return kerta hy jo true hoti hy


// let a = [2, 30, 10, 60, 9, 30, 77, 88];
// let res = a.find((v) => v % 3 === 0);
// console.log(res);


// ==============================================


// let data = [
//     {
//         user: "Atruba",
//         age: 22
//     },
//     {
//         user: "Rida",
//         age: 21
//     },
//     {
//         user: "Muqsit",
//         age: 20
//     },
//     {
//         user: "Mutib",
//         age: 12
//     },
//     {
//         user: "Muhib",
//         age: 10
//     },
// ];

// // console.log(data);
// let res = data.find((v) => v.age >= 18)
// console.log(res);


// ==============================================

//FOR EACH

// ye just print kervany ka kam kerta hy array ko lkin kuch action perform nh kerta like sum multiplication



// let data = [
//     {
//         user: "Atruba",
//         age: 22
//     },
//     {
//         user: "Rida",
//         age: 21
//     },
//     {
//         user: "Muqsit",
//         age: 20
//     },
//     {
//         user: "Mutib",
//         age: 12
//     },
//     {
//         user: "Muhib",
//         age: 10
//     },
// ];

// let res = data.forEach((v) => {
//     console.log(v.age,v.user);

// })

// ==============================================

//PRACTICE QUESTION

// let a=[1,2,3,4,5];
// let res = a.map((v)=>{
// return v+v;
// })

// console.log(res);
// console.log(a);

// ==============================================


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let res = a.filter((v) => {
//     return v % 2 === 0;
// })
// console.log(res);

// ==============================================

// let a = [
//     {
//         name: "Atruba",
//         marks: 90
//     },
//     {
//         name: "Muqsit",
//         marks: 25
//     },
//     {
//         name: "Rida",
//         marks: 50
//     }
// ];

// let res = a.find((v) => v.marks < 35)
// console.log(res);

// ==============================================

//COMPLETED



































