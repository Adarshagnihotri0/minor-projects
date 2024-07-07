// let h3 = document.querySelector("h3");
// let start = document.querySelector("#start");
// let stop = document.querySelector("#stop");
// let count = 0;
// let set;

// start.addEventListener("click", function(){
//    if (count == 0){
//     set = setInterval(function(){
//         h3.textContent = count;
//         count++;
//        }, 1000)
//    }
// })

// stop.addEventListener("click", function(){
//     if (count !== 0){
//         clearInterval(set);
//         count = 0;
//     }
// })


let h3 = document.querySelector("h3");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let count = 0;
let set;

start.addEventListener("click", function(){
    if(count == 0){
       set =  setInterval(function(){
            h3.textContent = count;
            count++;
        },1000)
    }
})


stop.addEventListener("click", function(){
    if(count !== 0){
        clearInterval(set);
        count = 0;
    }
})
