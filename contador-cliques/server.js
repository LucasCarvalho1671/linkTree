const express = require("express")
const app = express()
const port = 3000

// Simulação de contagem de cliques
let clickCounts = {
  instagram: 0,
  produto1: 0,
  produto2: 0,
  produto3: 0,
  github: 0,
}

// Rota para obter a contagem de cliques
app.get("/clicks", (req, res) => {
  res.json(clickCounts)
})

// Rota para registrar um clique
app.post("/click", express.json(), (req, res) => {
  const { link } = req.body
  if (clickCounts[link] !== undefined) {
    clickCounts[link]++
    res.json({ success: true, clicks: clickCounts[link] })
  } else {
    res.json({ success: false, message: "Link não encontrado" })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
