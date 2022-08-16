const Router = require('express')
const router = new Router()

const productController = require('../../contollers/product.controller.js')
const roleMiddleware = require('../../middlewares/role.middleware.js')

router.post('/', roleMiddleware, productController.create)
router.get('/', productController.getAll)
router.get('/:id', productController.getOne)

module.exports = router
