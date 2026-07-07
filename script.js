const fabBtn = document.getElementById("fabBtn");
const fabMenu = document.getElementById("fabMenu");

fabBtn.addEventListener("click", () => {

    fabMenu.classList.toggle("active");

    const icon = fabBtn.querySelector("i");

    if(fabMenu.classList.contains("active")){
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
    }
    else{
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
    }

});
const tooltip = document.getElementById("fabTooltip");

// Show only if user has never seen it before
if (!localStorage.getItem("firstAidTooltipShown")) {

    setTimeout(() => {
        tooltip.classList.add("show");
    }, 500);

    setTimeout(() => {
        tooltip.classList.remove("show");

        // Remember that the tooltip has been shown
        localStorage.setItem("firstAidTooltipShown", "true");

    }, 4000);
}
