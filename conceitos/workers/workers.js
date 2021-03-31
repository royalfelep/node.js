const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// Procurar no JSON a mulher chinesa mais rica (exercicio)

axios.get(url).then(response => {
    const workers = response.data

    const chineseWomans = workers.filter(obj => {
        return obj.genero == 'F' && obj.pais == 'China'
    })
    // console.log(chineseWomans)

    const womanSalary = (prevWoman, woman) => {
        return woman.salario > prevWoman.salario ? woman : prevWoman
    }

    const richestChineseWoman = chineseWomans.reduce(womanSalary)
    console.log(richestChineseWoman)
})