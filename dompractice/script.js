
// question 1
// let btn = document.querySelector('button');
// let para =  document.querySelector('p');
// btn.addEventListener('click',function(){
//    para.textContent = "akkad bakkad bum bum";
// })

//question2

// let img1 = document.querySelector("#one");
// let img2 = document.querySelector("#two");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     let src1 = img1.src;
//     let src2 = two.src;
//     img1.src = src2;
//     img2.src = src1;
// })


// question3
// let form = document.querySelector("form");
// let inp1  = document.querySelector('#input1');
// let inp2  = document.querySelector('#input2');

// let h4  = document.querySelector('h4');

// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     if(inp1.value === '' || inp2.value === ''){
//         h4.textContent = "kuch likho to maharaj";
//         h4.style.color = "red"
//     }

//     else{
//         h4.textContent = "working properly";
//         h4.style.color = "green";
//         console.log(inp1.value, inp2.value)
//     }
// })


// let h4 = document.querySelector("h4");
// let form = document.querySelector("form");
// let inps = document.querySelectorAll('input[type = "text"]');

// form.addEventListener("submit",function(ev){
//     ev.preventDefault();
//     inps.forEach(function(inp){
//         if(inp.value === ''){
//             h4.textContent = "Kuch likho to maharaj";
//                     h4.style.color = "red"
           
//         }
    
//         else{
//             h4.textContent = "working properly";
//             h4.style.color = "green";
//         }
    
//     })
    
// })


let h4 = document.querySelector("h4")
let form = document.querySelector("form");
let inps = document.querySelectorAll('input[type="text"]');

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(i=0; i<inps.length; i++){
       if (inps[i].value.trim() === ''){
        h4.textContent = "Kuch likho to maharaj";
        h4.style.color = "red";
        break;
        }

        else {
            h4.textContent = "";
            h4.style.color = "";

        }
    }
})

// let h4 = document.querySelector("h4");
// let form = document.querySelector("form");
// let inps = document.querySelectorAll('input[type="text"]');

// form.addEventListener("submit", function(ev){
//     ev.preventDefault();
//     for(i=0; i<inps.length; i++){
//         if(inps[i].value.trim() === ''){
//             h4.textContent = "Kuch likho to maharaj";
//             h4.style.color = "red";
//             break;
//         }
//         else {
//             h4.textContent = "";
//         }
//     }
// })
