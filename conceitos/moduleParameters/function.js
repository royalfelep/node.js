module.exports = function pessoas(nome,idade){
    return nome.map((nome,i) => `${nome} tem ${idade[i]} anos de idade.`)
}