// Lógica dos formulários técnicos

const formTecnico = document.getElementById("form-tecnico");
if (formTecnico) {
  formTecnico.addEventListener("submit", e => {
    e.preventDefault();
    alert("Formulário técnico salvo!");
    // Aqui pode integrar com backend ou PDF
  });
}
