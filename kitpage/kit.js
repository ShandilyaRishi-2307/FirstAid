function openModal(img, title, desc){

    document.getElementById("modalImg").src = img;

    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;
    document.getElementById("modal").style.display = "flex";
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

