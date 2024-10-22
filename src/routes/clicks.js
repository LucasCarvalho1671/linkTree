const express = require("express")
const router = express.Router()
const clicksController = require("../controllers/clicksController")

// Rota para obter a contagem de cliques
router.get("/", clicksController.getClicks)

// Rota para registrar um novo clique
router.post("/", clicksController.registerClick)

module.exports = router
