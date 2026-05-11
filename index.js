const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor de videojuegos escuchando en http://localhost:${PORT}`);
});