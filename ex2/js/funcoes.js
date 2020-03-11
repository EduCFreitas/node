const titulo = 'Generation - NodeJs'

function maiusculo(nome){
    return nome.toUpperCase()
}

function minusculo(nome){
    return nome.toLowerCase()
}

function totalLetras(nome){
    var total = nome.length
    return `Total de letras: ${total}`
}

// Para que estas funções fiquem acessíveis para outro código:
// Exportar as funções
module.exports = {
    maiusculo,
    minusculo,
    totalLetras,
    titulo
}