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

function openModal(img, title, desc){

    document.getElementById("modalImg").src = img;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc1").innerHTML = desc; 
    document.getElementById("modal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}

const modal = document.querySelector(".modal");

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

