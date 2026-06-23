const btn = document.getElementById("btn");
const content = document.getElementById("extraContent");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    content.classList.toggle("show");

    if(content.classList.contains("show")){
        btn.innerHTML = "Show Less ↑";
    } else {
        btn.innerHTML = "Read More →";
    }
});