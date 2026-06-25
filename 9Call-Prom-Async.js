// PROMISES & ASYNCHRONOUS PROGRAMMING


// SYNCHRONOUS---------------code run line by line-------------------------------------

// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// ASYNCHRONOUS--------------perform all the tasks individually-------------------------------------


// console.log("Task 1");

// setInterval(() => {

//     console.log("Task 2");
// }, 1000)

// console.log("Task 3");


// CALLBACK HELL------------------------------------------------------


// setTimeout(() => {
//     console.log("Task 1");
//     setTimeout(() => {
//         console.log("Task 2");
//         setTimeout(() => {
//             console.log("Task 3");
//         }, 1000)
//     }, 2000)
// }, 1000)



// PROMISE-----------------------------------------------------------

let login = true;
let myPromise = new Promise((resolve, reject) => {
    if (login) {

        resolve({ status: 1, msg: "login Done" });
    } else {
        reject({ status: 0, msg: "Username and password invalid" });

    }
})


// // .THEN .CATCH----------------------
// myPromise.then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);

// })


// console.log(myPromise);



// PROMISE-CHAINING---------------------------------------------------

let mycode = (taskNumber, time) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task " + taskNumber)
        }, time)

    })

}


// mycode(1, 1000)
//     .then((res) => mycode(2, 1000))
//     .then((res) => mycode(3, 1000))
//     .then((res) => mycode(4, 1000))
//     .then((res) => mycode(5, 1000))
//     .then((res) => mycode(6, 1000))



// ASYNC-AWAIT---------------------------------------------------

let homeWorkDone = (sub) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${sub} work Completed`)
        }, 1000)
    })
}



let finalHomeWorkDone = async () => {

    // let task1 = await homeWorkDone("Eng");
    // console.log(task1);

    // let task2 = await homeWorkDone("Math");
    // console.log(task2);

    // let task3 = await homeWorkDone("Sci");
    // console.log(task3);


    // setTimeout(() => {
    //     console.log("Work Done");
    // }, 1000)




    // ALLPROMISES--------


    let allPromise = await Promise.all([
        homeWorkDone("Eng"),
        myPromise,
        homeWorkDone("math"),
        mycode(1, 2000),
        homeWorkDone("sci")
    ])

    console.log(allPromise);


    console.log("Work Done");

}

finalHomeWorkDone()



// ======================================================================================================

// COMPLETED



