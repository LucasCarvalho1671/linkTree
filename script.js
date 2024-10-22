function toggleMode() {
  //controla o fundo
  const html = document.documentElement
  html.classList.toggle("Light")

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("Light")) {
    //se estiver em Light mode, adicionar a imagem azul
    img.setAttribute("src", "./assets/assets/Lucas-light.jpeg")
    img.setAttribute("alt", "Foto guitarra")
  } else {
    //se estiver sem o Light mode mander a imagem amarela
    img.setAttribute("src", "./assets/assets/Lucas.png")
    img.setAttribute("alt", "Foto do Lucas ")
  }
}


// Dados de login fixos (para um login simples sem backend)
const validUsername = "admin";
const validPassword = "1234";

// Função para abrir o modal
function openModal() {
  document.getElementById("loginModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

// Função de login
function login() {
  const username = document.getElementById("username").value.toLowerCase()
  const password = document.getElementById("password").value.toLowerCase()

  // Verificar se o login está correto
  if (username === validUsername.toLowerCase() && password === validPassword.toLowerCase()) {
    // Fechar o modal e redirecionar para a página de contagem
    closeModal()
    window.location.href = "contagem.html" // Redireciona para a página de contagem
  } else {
    // Mostrar mensagem de erro
    document.getElementById("loginError").style.display = "block"
  }
}

// Fechar o modal se o usuário clicar fora da janela
window.onclick = function(event) {
  const modal = document.getElementById("loginModal");
  if (event.target === modal) {
    closeModal();
  }
}
