// console.log("fetch api");


// FETCH API WITH ASYNC-AWAIT-------------------------------------------------------------------------------------------------


// let showProducts = async () => {
//     let ApiFirstRes = await fetch("https://dummyjson.com/products");
//     let finaldata = await ApiFirstRes.json();

//     console.log(finaldata);
//     console.log(finaldata.limit);
//     console.log(finaldata.skip);
//     console.log(finaldata.total);
//     console.log(finaldata.products);

// }

// showProducts()



// FETCH API WITH .THEN-----------------------------------------------------------------------------------------------------------------



let showProducts2 = () => {
    fetch("https://dummyjson.com/products")
        .then((res) => {
            return res.json()
        })
        .then((finalres) => {

            // destructure obj

            let { products, limit, skip, total } = finalres

            console.log(products);
            console.log(limit);
            console.log(skip);
            console.log(total);



            // use direct

            console.log(finalres);
            console.log(finalres.products);
            console.log(finalres.skip);
            console.log(finalres.limit);
            console.log(finalres.total);


        })


}

showProducts2()



