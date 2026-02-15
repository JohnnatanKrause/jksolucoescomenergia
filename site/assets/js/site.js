// Interações do site institucional

// Rolagem suave para seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Exemplo de botão hero
const heroBtn = document.getElementById("btn-servicos");
if (heroBtn) {
  heroBtn.addEventListener("click", () => {
    window.location.href = "servicos.html";
  });
}
