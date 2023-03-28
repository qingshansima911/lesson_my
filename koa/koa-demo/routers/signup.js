const router = require('koa-router')()
// 控制权交给control层
const controller = require('../controller/c-signup')
router.get('/signup', controller.getSignup)
router.post('/signup', controller.postSignup)
module.exports = router