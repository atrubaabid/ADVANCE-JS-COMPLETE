//ARRAY

// let user = [10, 20, 30, 40, 50, 60, 70,3,5,7,9];
// console.log(user);
// console.log(user[0]);
// console.log(user[6]);
// console.log(user[user.length-3]);


//NESTED ARRAY
// console.log(user[7][2]);

//FOR LOOP

// for (i = 0; i < user.length; i++) {
//     console.log(user[i]);

// }

// console.log("");
// console.log("");



// for (i = user.length - 1; i > 0; i--) {
//     console.log(user[i]);

// }


//FOR OF LOOP

// for (let v of user) {
//     console.log(v);

// }

//FOR IN LOOP

// for (let v in user) {
//     console.log(v, user[v]);

// }


//SUM PROGRAM

// let sum = 0;
// for (let v of user) {
//     console.log(v);
//     sum+=v

// }

// console.log(sum);


//EVEN NUMBER PROGRAM

// for(let v of user){
//     if(v%2===0){
//         console.log(v);

//     }
// }


//UPDATE ARRAY

// user[1]= 222;
// console.log(user);


//ARRAY METHODS WHO CHANGE ORIGINAL ARRAY

// let a = [10, 20, 30, 40, 50, 60, 70, 3, 5, 7, 9];
// a.push(77)              //add in last
// a.push(11)

// let b = a.pop()          //remove in last
// console.log(b);

// a.pop()
// console.log(a);


// a.shift()                   //remove start
// console.log(a);

// a.unshift(1234)             //add start
// console.log(a);


// a.splice(3,1,);    //delete in splice

// a.splice(1, 0, 4000)   //add in splice

// a.splice(0, 1, 333)    //replace in splice
// console.log(a);

// let a = [20, 50, 80, 10, 40];

// a.sort();                   //sort alphabetically like a-z and 0-10
// console.log(a);

// a.reverse()        //reverse all the condition
// console.log(a);


//your value, start position, end poistion 


// a.fill(9, 2, 3)          //change value
// console.log(a);


//LOGICAL QUESTION


// jb ham array ko loop me remove ker rahy hoty hyn tw end me 2 elements bach jaty hyn or choty array me loop nhi chlta


// let a = [20, 50, 80, 10, 40];
// for (let g of a) {
//     a.pop();
//     console.log(a);

// }


// =====================================================================

// let r=[1,2,3,4];
// for(let v of r){
//     r[3]=v
// }
// console.log(r);

// =====================================================================


//ARRAY METHODS WHO CANNOT CHANGE ORIGINAL ARRAY


// let l = ["red", "green", "blue", "yellow", "gray"];
// let arr = l.slice(2, 4);
// console.log(arr);
// console.log(l);


// let l = ["red", "green", "blue", "yellow", "gray"];
// let a = ["1", "green", "blue", "yellow", "gray"];
// let b = ["2", "green", "blue", "yellow", "gray"];
// let arr= l.concat(a,b);
// console.log(arr);

// let l = ["red", "green", "blue", "yellow", "gray"];
// let n = [2, 3, 4, 5];
// console.log(l.includes("red"));
// console.log(l.indexOf("grayyy"));
// console.log(l.join("-"));
// console.log(l.toString());
// console.log(n.toString());

//PRACTICE QUESTION

// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];



// for (let v of a) {

//     if (b.includes(v)) {
//         console.log(v);

//     }

// }

// ==============================================


// let a = [1, 2, 3, 4, 3, 4, 2, 1, 8, 9];
// let arr = [];

// for (let v of a) {
//     if (!arr.includes(v)) {
//         arr.push(v);
//     }
// }
// console.log(arr);

// ========================================================


// let a = [9999, 22, 11, 44, 55, 66, 77, 88];
// let Greater = [];

// for (let v of a) {

//     console.log(v);
//     if (v >= Greater)
//         Greater = v;
// }

// console.log(Greater);


// ========================================================

//REVERSE GAME

// let alp = [111, 222, 333, 444, 555, 666, 777];
// let alp2 = [];
// for (i = alp.length - 1; i >= 0; i--) {

//     alp2.push(alp[i])
// }
// console.log(alp2);

// ========================================================



// let alp = [111, 222, 333, 444, 555, 666, 777];
// let alp2 = [];
// for (let v of alp) {
//     alp2.unshift(v)
// }
// console.log(alp2);












































