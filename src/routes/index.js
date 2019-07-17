var express = require('express')
var router = express.Router()
const controller = require('../controllers/index')
const userController = require('../controllers/users')

/* GET home page. */
router.get('/', controller.getIndex)
router.get('/v1/users', userController.getUsers)
router.get('/v1/user/:userId', userController.getUsers)
router.post('/v1/user/add', userController.createUser)
router.put('/v1/user/edit/:userId', userController.updateUser)
router.delete('/v1/user/delete/:userId', userController.deleteUser)


module.exports = router
