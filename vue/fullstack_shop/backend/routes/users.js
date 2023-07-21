const router = require('koa-router')()
const userController = require('../controllers/user')
router.prefix('/users')

router.post('/register', userController.handleRegister)
router.post('/login', userController.handleLogin)

module.exports = router
