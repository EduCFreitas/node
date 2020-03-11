// console.log('Olá mundo!');

// Criar a identidade do projeto: npm init
// Observar que foi criado o arquivo package.json (JavaScript Object Notation) que contém informações do projeto
// Instalar o framework de node -> express
// Executar o comando: npn install express
let express = require('express') // Importando o módulo express
let app = express()
let port = 8081
app.get('/', (req, res) => {
    res.send('<h1>Home<h1>')
})
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})