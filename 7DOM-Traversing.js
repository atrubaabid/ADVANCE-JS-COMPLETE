// DOWNWARDS (TO CHILD ELEMENTS)

// METHODS

// children

// let div = document.querySelector(".main2");
// console.log(div);
// console.log(div.children);
// console.log(div.children[0].outerHTML);
// console.log(div.children[1].outerHTML);
// console.log(div.children[2].outerHTML);

// PRINT ALL CHILDREN WITH FOR OF LOOP

// for (let v of div.children) {
//   console.log(v.outerHTML);
// }

// PRINT ALL CHILDREN WITH THE HELP OF ARRAY BCZ ITS NOT WORK ON FOR-EACH DIRECTLY

// Array.from(div.children).forEach((items)=>{
// console.log(items.innerHTML);

// })

// ===================================================================================================

// firstElementChild

// let div = document.querySelector(".main2");
// console.log(div.firstElementChild.innerHTML);
// console.log(div.firstElementChild.outerHTML);

// lastElementChild

// console.log(div.lastElementChild.innerHTML);
// console.log(div.lastElementChild.outerHTML);


// ===================================================================================================

// UPWARDS (TO PARENT ELEMENTS)

// METHODS

// parentElement

// let btn = document.querySelector("button");
// console.log(btn.parentElement);


// closest()


// console.log(btn.closest("div"));
// console.log(btn.closest("div").parentElement);      //body
// console.log(btn.closest("div").parentElement.parentElement); //html


// ===================================================================================================


// SIDEWAYS (TO SIBLINGS )

// METHODS



// previousElementSibling

// let p = document.querySelector("p")
// console.log(p.previousElementSibling);


// nextElementSibling

// console.log(p.nextElementSibling);


// ===================================================================================================


// NODE-BASED TRAVERSING


// all node based elements count the space as a text


// let div = document.querySelector(".main2")


// // childNodes
// console.log(div.childNodes);


// // firstChild
// console.log(div.firstChild);


// // lastChild
// console.log(div.lastChild);


// // parentNode
// console.log(div.parentNode);

// // previousSibling
// console.log(div.previousSibling);

// // nextSibling
// console.log(div.nextSibling);



// ===================================================================================================





// COMPLETED



















