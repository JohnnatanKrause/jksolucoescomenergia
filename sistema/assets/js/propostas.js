// Lógica de propostas comerciais

const formProposta = document.getElementById("form-proposta");
if (formProposta) {
  formProposta.addEventListener("submit", e => {
    e.preventDefault();
    alert("Proposta gerada!");
    // Cálculo automático de valores pode ser implementado aqui
  });
}
