var express = require('express')
var router = express.Router()
const controller = require('../controllers/index')
const userController = require('../controllers/users')

/* GET home page. */
router.get('/', controller.getIndex)
router.get('/v1/users', userController.getIndex)

module.exports = router
