const router = require('koa-router')()
const indexController = require('../controllers/index')
// const checkAuth = require('../middleware/auth')

router.get('/type', indexController.handleType)
router.get('/goodsList', indexController.handleGoodsList)
router.post('/productDetail/:typeId/:id', indexController.handleProductDetail)
router.post('/goodsFind/:title', indexController.handleGoodsFind)

module.exports = router
