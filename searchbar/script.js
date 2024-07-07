let people = document.querySelector(".people");
let input  = document.querySelector("input");

const data = [
    {name: "harsh", src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "abhay", src: "https://images.unsplash.com/photo-1525457136159-8878648a7ad0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "anay", src: "https://images.unsplash.com/photo-1623067258309-ad7948e46c9f?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "anika", src: "https://images.unsplash.com/photo-1643633051030-a74836fb6655?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "nikita", src: "https://images.unsplash.com/photo-1645389674324-7731da27cdbf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]

let pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
        <div class="img">
            <img src="${elem.src}" alt="">
        </div>
        <h4>${elem.name}</h4>
    </div>`
})

people.innerHTML = pers;

input.addEventListener("input", function(){
   const matching = data.filter(function(e){
    return e.name.toLowerCase().startsWith(input.value);
   })

   let newusers = "";
   matching.forEach(function(elem){
    newusers += `<div class="person">
    <div class="img">
        <img src="${elem.src}" alt="">
    </div>
    <h4>${elem.name}</h4>
</div>`
   })

   people.innerHTML = newusers;
})




