const router = require('koa-router')()
const cartController = require('../controllers/cart')

router.post('/cartList', cartController.handleCartList)
router.post('/cartAdd', cartController.handleCartAdd)
router.post('/cartModify', cartController.handleCartModify)
router.post('/cartDelete', cartController.handleCartDelete)
router.post('/cartFind', cartController.handleCartFind)

module.exports = router