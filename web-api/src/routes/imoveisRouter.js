const express = require('express')
const router = express.Router()
const controller = require('../controllers/imovelController')


router.post('/', controller.create)
router.get('/:id', controller.read)
router.get('/', controller.read)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

module.exports = router