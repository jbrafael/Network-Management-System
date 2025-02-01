const express = require('express');
const path = require('path'); // Importa o módulo path

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos e processar JSON
app.use(express.static('public'));
app.use(express.json());

// Rota para servir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});