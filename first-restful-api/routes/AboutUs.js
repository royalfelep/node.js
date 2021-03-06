const express = require('express')
const router = express()

// ROUTES
router.get('/', (req, res) => {
    res.send('Sobre nós')
})

module.exports = router;