const textarea = document.querySelector("textarea");
const counter =  document.querySelector("#counter");

textarea.addEventListener("input",function(){
    if(textarea.value.length > 800){
        textarea.value = textarea.value.substring(0,800);
    }

    counter.textContent = textarea.value.length;
})