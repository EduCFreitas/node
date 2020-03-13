function soma(n1,n2){
    return `${n1} + ${n2} = ${n1+n2}`
}

function subtracao(n1,n2){
    return `${n1} - ${n2} = ${n1-n2}`
}

function multiplicacao(n1,n2){
    return `${n1} x ${n2} = ${n1*n2}`
}

function divisao(n1,n2){
    if(n2==0){
        return 'Impossível dividir por 0'
    }else{
        return `${n1} / ${n2} = ${n1/n2}`
    }
}

module.exports = {
    soma, subtracao, multiplicacao, divisao
}