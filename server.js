const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Endpoint para receber mensagens
app.post('/send', (req, res) => {
    const { recipient, message } = req.body;
    console.log(`Recipient: ${recipient}, Message: ${message}`);
    res.send({ status: 'Mensagem recebida com sucesso!' });
});

// Endpoint para receber arquivos
app.post('/upload', (req, res) => {
    console.log('Arquivo recebido');
    res.send({ status: 'Arquivo recebido com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
