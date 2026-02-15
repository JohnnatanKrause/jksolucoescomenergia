// Lógica da área restrita / login

const formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", e => {
    e.preventDefault();
    alert("Login realizado!");
    // Aqui pode validar usuário/senha e redirecionar para dashboard
  });
}
