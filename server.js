const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Contadores de cliques iniciais
let clickCounts = {
  instagram: 0,
  produto1: 0,
  produto2: 0,
  produto3: 0,
  github: 0,
};

// Rotas
const clickRoutes = require("./src/routes/clicks")
app.use("/api/clicks", clickRoutes);

// Rota para obter contagem de cliques
app.get("/api/clicks", (req, res) => {
  res.json(clickCounts);
});

// Rota para registrar cliques
// Rota para registrar cliques
app.post("/api/click", (req, res) => {
  const { link } = req.body;

  // Incrementar o contador correspondente
  if (clickCounts[link] !== undefined) {
    clickCounts[link]++
    return res.json({ success: true, clicks: clickCounts[link] });
  }

  return res.status(400).json({ success: false, message: "Link inválido" });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});