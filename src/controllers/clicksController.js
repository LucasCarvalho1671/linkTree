let clickData = {
  instagram: 0,
  produto1: 0,
  produto2: 0,
  produto3: 0,
  github: 0,
}

exports.getClicks = (req, res) => {
  res.json(clickData)
}

exports.registerClick = (req, res) => {
  const { link } = req.body

  if (clickData[link] !== undefined) {
    clickData[link]++
    res.json({ success: true, clicks: clickData[link] })
  } else {
    res.status(400).json({ success: false, message: "Link inválido" })
  }
}
