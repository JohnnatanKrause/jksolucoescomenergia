// Lógica de relatórios técnicos

function calcularTotal() {
  let total = 0;
  document.querySelectorAll(".valor-item").forEach(item => {
    total += parseFloat(item.value) || 0;
  });
  document.getElementById("total").textContent = "R$ " + total.toFixed(2);
}
