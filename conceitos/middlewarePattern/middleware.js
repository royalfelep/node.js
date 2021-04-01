// middleware pattern

const objTeste = {}

const mid1 = (element, next) => {
    element.valor1 = 'mid1'
    next()
}

const mid2 = (element,next) => {
    element.valor2 = 'mid2'
    next()
}

const mid3 = (element) => {
    element.valor3 = 'mid3'
}

const exec = (objTeste, ...middlewares) => {
    const execMid = indice => {

        middlewares && indice < middlewares.length &&

        middlewares[indice](objTeste,()=>execMid(indice+1))
    }
    
    execMid(0)
}

exec(objTeste, mid1, mid2, mid3)
console.log(objTeste)