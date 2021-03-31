const fs = require('fs')
const dir = __dirname + '/example.json' // readingFiles/example.json

// Leitura síncrona
const data = fs.readFileSync(dir, 'utf-8')
console.log(data)

// Leitura assíncrona
fs.readFile(dir,'utf8',(err,data) => {
    if(err != null){
        return console.log("Erro.")
    }
    else
        parseData = JSON.parse(data)
        console.log(`${parseData.user1.name} : ${parseData.user1.password} : ${users.user1.isPremium}`)
})

// Método simplificado
const users = require('./example.json')
console.log(`${users.user2.name} : ${users.user2.password} : ${users.user2.isPremium}`)

// Ler pasta

fs.readdir(__dirname, (err,files) => {
    console.log(files)
})