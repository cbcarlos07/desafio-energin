const express = require('express')
const router = express.Router()
const controller = require('../controllers/DashboardController')


router.get('', controller.dashboard)

module.exports = router