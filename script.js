function toggleMode() {
  // Controla o fundo
  const html = document.documentElement
  html.classList.toggle("Light")

  // Pegar a imagem
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("Light")) {
    // Se estiver em Light mode, adicionar a imagem azul
    img.setAttribute("src", "./assets/assets/Lucas-light.jpeg")
    img.setAttribute("alt", "Foto guitarra")
  } else {
    // Se estiver sem o Light mode mandar a imagem amarela
    img.setAttribute("src", "./assets/assets/Lucas.png")
    img.setAttribute("alt", "Foto do Lucas ")
  }
}

// Dados de login fixos (para um login simples sem backend)
const validUsername = "admin"
const validPassword = "1234"

// Função para abrir o modal
function openModal() {
  document.getElementById("loginModal").style.display = "flex"
}

// Função para fechar o modal
function closeModal() {
  document.getElementById("loginModal").style.display = "none"
}

// Função de login
function login() {
  const username = document.getElementById("username").value.toLowerCase()
  const password = document.getElementById("password").value.toLowerCase()

  // Verificar se o login está correto
  if (
    username === validUsername.toLowerCase() &&
    password === validPassword.toLowerCase()
  ) {
    // Fechar o modal e redirecionar para a página de contagem
    closeModal()
    window.open("contagem.html", "_blank") // Redireciona para a página de contagem
  } else {
    // Mostrar mensagem de erro
    document.getElementById("loginError").style.display = "block"
  }
}

// Fechar o modal se o usuário clicar fora da janela
window.onclick = function (event) {
  const modal = document.getElementById("loginModal")
  if (event.target === modal) {
    closeModal()
  }
}



// Função auxiliar para extrair o nome do link a partir do href
function getLinkName(url) {
  if (url.includes("instagram")) return "instagram"
  if (url.includes("github")) return "github"
  if (url.includes("8Ur1kv6jb1")) return "produto1"
  if (url.includes("9pMPh3Cm2R")) return "produto2"
  if (url.includes("4VKxeRFeh4")) return "produto3"
  return null
}
// Função para obter a contagem de cliques do backend
function getClicks() {
  fetch("https://linktree-wst9.onrender.com/api/clicks")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("instagramClicks").textContent =
        data.instagram || 0
      document.getElementById("produto1Clicks").textContent = data.produto1 || 0
      document.getElementById("produto2Clicks").textContent = data.produto2 || 0
      document.getElementById("produto3Clicks").textContent = data.produto3 || 0
      document.getElementById("githubClicks").textContent = data.github || 0
    })
    .catch((error) => {
      console.error("Erro ao obter os dados de cliques:", error)
    })
}

// Função para registrar cliques no backend
function registerClick(linkName) {
  fetch("https://linktree-wst9.onrender.com/api/click", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ link: linkName }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        console.log(
          `Clique registrado no link: ${linkName}. Total de cliques: ${data.clicks}`
        )
      } else {
        console.error("Erro ao registrar o clique:", data.message)
      }
    })
    .catch((error) => {
      console.error("Erro ao se comunicar com o servidor:", error)
    })
}

// Função para adicionar o evento de clique aos links do index.html
function addClickEventListeners() {
  document.querySelectorAll("ul li a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const linkName = getLinkName(event.target.href)
      if (linkName) {
        registerClick(linkName)
      }
    })
  })
}

// Função auxiliar para extrair o nome do link a partir do href
function getLinkName(url) {
  if (url.includes("instagram")) return "instagram"
  if (url.includes("github")) return "github"
  if (url.includes("8Ur1kv6jb1")) return "produto1"
  if (url.includes("9pMPh3Cm2R")) return "produto2"
  if (url.includes("4VKxeRFeh4")) return "produto3"
  return null
}

// Chamando a função no window.onload para registrar os cliques
document.addEventListener("DOMContentLoaded", () => {
  getClicks()
  setInterval(getClicks, 5000) // Atualiza a contagem a cada 5 segundos
  addClickEventListeners() // Adiciona os eventos de clique aos links
})
