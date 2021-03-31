const fs = require('fs')
const petShopJs = require('../petShop')

 fs.writeFile('files/petShop.json', JSON.stringify(petShopJs), err => {
    err == null ? console.log("Arquivo criado com sucesso.") : console.log(`Erro. ${err}`)
 })