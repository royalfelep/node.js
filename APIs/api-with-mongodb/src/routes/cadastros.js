const router = require('express').Router()
const UserSchema = require('../models/userSchema')

// Get all users from the User Collection
router.get('/', async (req, res) => {
    try {
        const allUsers = await UserSchema.find()
        res.send(allUsers)
    } catch (e) {
        res.send('Não foi possível criar o usuário.')
        console.log(e)
    }
})

// Get an specific user from the User Collection
router.get('/:id', async (req, res) => {
    try {
        const user = await UserSchema.findById(req.params.id)
        if (user === null) throw "Null object"
        res.send(user)
    } catch (e) {
        res.send('Não foi encontrar o usuário.')
        console.log(e)
    }
})

// Create a new user in the User Collection
router.post('/', async (req, res) => {
    const user = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        number: req.body.num,
    })
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    }
    catch (e) {
        res.send('Não foi possível criar o usuário.')
        console.log(e)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const user = await UserSchema.remove({ _id: req.params.id })
        res.send(user)
    } catch (e) {
        res.send('Não foi encontrar o usuário.')
        console.log(e)
    }
})

module.exports = router