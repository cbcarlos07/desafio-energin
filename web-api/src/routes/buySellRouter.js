const express = require('express')
const router = express.Router()
const controller = require('../controllers/buySellController')


router.post('/', controller.create)
router.get('/:id', controller.readById)

module.exports = router