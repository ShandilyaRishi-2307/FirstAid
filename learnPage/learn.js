function openPage(card) {
    window.location.href = `/learnPage/explain/${card.id}.html`;
}

document.addEventListener("DOMContentLoaded", () => {
        const searchInput = document.getElementById("searchInput");
        const cards = document.querySelectorAll(".topics .card");
        const noResultsMsg = document.getElementById("no-results");

        searchInput.addEventListener("input", (e) => {
           
            const query = e.target.value.toLowerCase().trim();
            let hasVisibleCards = false;

            cards.forEach(card => {
             
                const topicName = card.textContent.toLowerCase();

            
                if (topicName.includes(query)) {
                    card.style.display = ""; // Shows the card
                    hasVisibleCards = true;
                } else {
                    card.style.display = "none"; 
                }
            });

            if (hasVisibleCards) {
                noResultsMsg.style.display = "none";
            } else {
                noResultsMsg.style.display = "block";
            }
        });
    });