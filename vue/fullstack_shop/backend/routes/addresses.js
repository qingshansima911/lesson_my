const router = require('koa-router')()
const addressController = require('../controllers/address')

router.get('/addressList/:username', addressController.handleAddressList)
router.put('/defaultModify', addressController.handleDefaultModify)
router.get('/defaultFind', addressController.handleDefaultFind)
router.post('/addressAdd', addressController.handleAddressAdd)
router.get('/addressFind/:id', addressController.handleAddressFind)
router.put('/addressModify', addressController.handleAddressModify)
router.delete('/addressDelete/:id', addressController.removeAddress)

module.exports = router