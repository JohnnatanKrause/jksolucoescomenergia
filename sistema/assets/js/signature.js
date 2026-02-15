// Assinatura manuscrita digital (Canvas)

const canvas = document.getElementById("signature-pad");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let desenhando = false;

  canvas.addEventListener("mousedown", () => desenhando = true);
  canvas.addEventListener("mouseup", () => desenhando = false);
  canvas.addEventListener("mousemove", desenhar);

  function desenhar(e) {
    if (!desenhando) return;
    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 2, 0, Math.PI * 2);
    ctx.fill();
  }
}
