const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('', (req, res)=>{
    res.json({msg: 'Bem vindo a api de teste'})
})

router.patch('/auth', controller.auth)

module.exports = router