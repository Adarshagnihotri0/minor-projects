let form = document.querySelector("form");
let inps = document.querySelectorAll('input[type="text"]');
let h4 = document.querySelector("h4");
form.addEventListener("submit", function(e){
    e.preventDefault();

    let allFilled = true;
    inps.forEach(function(inp){
        if (inp.value.trim() === '') {
            h4.textContent = "kuch likho to maharaj";
            h4.style.color = "red";
            allFilled = false;
        }
    });

    if (allFilled) {
        h4.textContent = "";
        h4.style.color = "";
        // Optionally, you can allow the form to submit here by removing e.preventDefault()
        form.submit();
        alert("hello");
    }
});

