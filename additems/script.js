let add = document.querySelector("#add");
let remove = document.querySelector("#remove");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

// let li = document.createElement("li");

add.addEventListener("click", function(e){
    e.preventDefault();
    if(input.value.trim() !== "" ){}

    let li = document.createElement("li");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = ""; // Clear the input after adding

    });

    remove.addEventListener("click", function() {
        if (ul.lastChild) {
            ul.removeChild(ul.lastChild);
        }

    
})