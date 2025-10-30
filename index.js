// index.js
const express = require('express');
const app = express();
const path = require('path');

// Puerto asignado por Railway o 3000 localmente
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (CSS, imágenes, etc.) desde "public"
app.use(express.static('public'));

// Ruta principal: cargar tu archivo "cecmex.html"
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cecmex.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
