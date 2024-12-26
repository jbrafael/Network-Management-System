const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos e processar JSON
app.use(express.static('public'));
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Network-Management-System está funcionando!');
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});