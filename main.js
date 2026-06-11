const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.dataset.category;

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    cards.forEach(card => {
      const cardCategories = card.dataset.category.split(" ");

      if (filter === "all" || cardCategories.includes(filter)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            e.target.style.animation = `fadeUp 0.5s ${i * 0.06}s ease both`;
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(c => observer.observe(c));

const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
}, {threshold:0.15});
document.querySelectorAll('.grid-row').forEach(r => obs.observe(r));
