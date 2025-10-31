const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname)));

// Servir el HTML principal (cecmex.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "cecmex.html"));
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto ${port}`);
});
