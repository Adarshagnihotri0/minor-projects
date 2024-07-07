// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");



// var ul = document.querySelector('ul');
// var input = document.querySelector("input");
// var li;


// add.addEventListener("click", function(){
//     if(input.value.trim() === '' ){}
//     else {
//         li = document.createElement("li")
//         li.textContent = input.value;
//         ul.appendChild(li)
//         input.value = ""

//     }
// })

// remove.addEventListener("click", function(){
//    ul.removeChild(li)

// })



let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let li;
let ul = document.querySelector("ul");
let input = document.querySelector("input");

add.addEventListener("click", function(){
    if(input.value.trim() === ''){}
    else{
        li = document.createElement("li");
        li.textContent = input.value.trim();
        ul.appendChild(li);
        input.value = '';
    }

})


remove.addEventListener("click", function(){
    if(ul.lastChild){
        ul.removeChild(ul.lastChild);
    }

})