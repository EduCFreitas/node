// Criando um servidor
var http = require('http') // Carregando o módulo http no node
http.createServer(function(requisicao, resposta){
    resposta.end('<h1 style="color: red;">Bem vindo ao meu site!</h1>')
}).listen(3000);
// Com isso cria-se um servidor

console.log('Meu servidor está rodando!')
// Posso subir este código para um servidor e todo mundo poderia executar este código