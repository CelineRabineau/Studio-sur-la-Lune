// Sélectionne les boutons et les cards
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

// Boucle sur chaque bouton
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.category; // catégorie du bouton

    // Bouton actif visuel
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Boucle sur chaque card
    cards.forEach(card => {
      const cardCategories = card.dataset.category.split(" "); // transforme "graphisme ia" en ["graphisme", "ia"]

      if (filter === "all" || cardCategories.includes(filter)) {
        card.style.display = "flex"; // affiche la card
      } else {
        card.style.display = "none"; // cache la card
      }
    });
  });
});