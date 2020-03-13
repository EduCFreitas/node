var calcula = require('./js/funcoes')
var n1 = 2
var n2 = 4

const express = require('express'); // Importa módulo express
const app = express(); // Cria instância do express
let port = 8081

// Rota principal
app.get('/', (req, res) => {
    res.send(`<h1>Calculadora</h1> ${calcula.soma(n1,n2)}`) //send -> função do express / end -> função do http
})

app.listen(port, function() {
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl +c')
})

console.log(calcula.soma(2, 4))
console.log(calcula.subtracao(2, 4))
console.log(calcula.multiplicacao(2, 4))
console.log(calcula.divisao(2, 4))

