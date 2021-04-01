const express = require('express')
const app = express()
const products = require('./productsRegister')

app.use(express.urlencoded({ extended: true }))

app.get('/produtos',(req,res)=>{
    res.send(products.getAllProducts())
})

app.post('/produtos',(req,res)=>{
    newProduct = products.generateProduct({
        name: req.body.name,
        brand: req.body.brand,
        model: req.body.model,
        value: req.body.value
    })
    res.send(newProduct)
})

app.listen(3000,()=>{
        console.log('Server running at "3000" port.')
    })