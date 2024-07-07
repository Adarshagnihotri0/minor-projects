// let home = document.querySelector("#home");
// let about = document.querySelector("#about");
// let contact = document.querySelector("#contact");

// let hometext = document.querySelector("#hometext");
// let abouttext = document.querySelector("#abouttext");
// let contacttext = document.querySelector("#contacttext");



// home.addEventListener("click", function(){
// saaretexthtao();
// hometext.style.display = "block";
// hometext.style.width = "30%";
// })


// about.addEventListener("click", function(){
//     saaretexthtao();
//    abouttext.style.display = "block";
//    abouttext.style.width = "30%";
// })


// contact.addEventListener("click", function(){
//     saaretexthtao();

//     contacttext.style.display = "block";
//     contacttext.style.width = "30%";
// })

// function saaretexthtao(){
//     document.querySelectorAll("p").forEach(function(p){
//         p.style.display = "none";

//     })
// }



// let tabs =  document.querySelectorAll(".tab");
// let ptags = document.querySelectorAll("p");

// tabs.forEach(function(tab, index){
//     tab.addEventListener("click", function(){
//         hidealltext();
//         ptags[index].style.display = "block";
//         ptags[index].style.width = "50%";
//     })
// })

// function hidealltext(){
//     ptags.forEach(function(p){
//         p.style.display = "none";
//     })
    
// }

//event delegation parent pr eventlistener lgao


let tabs = document.querySelectorAll(".tab");
let ptags = document.querySelectorAll("p");

tabs.forEach(function(tab, index){
    tab.addEventListener("click", function(){
        hidetext();
        ptags[index].style.display = "block";
        ptags[index].style.width = "30%";
    })

})

function hidetext(){
    ptags.forEach(function(p){
        p.style.display = "none"
    })

}