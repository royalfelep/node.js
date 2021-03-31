// complemento de writingFiles (lendo arquivo petShop.json criado)

const PetShopJson = require('../petShop.json')
 console.log(`O valor da ração Premier 2.5kg é de R$${PetShopJson.produtos.racoes.premier.pesoDaRacao['2.5kg']} à vista.`)