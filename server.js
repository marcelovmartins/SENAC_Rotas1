const express = require('express');
const app = express();

const PORT = 3000;

// Rota que retorna "Hello World"
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Rota que retorna seu nome
app.get('/nome', (req, res) => {
    res.send('Marcelo Martins');
});

// Rota que retorna seu curso
app.get('/curso', (req, res) => {
    res.send('Análise e Desenvolvimento de Sistemas');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});