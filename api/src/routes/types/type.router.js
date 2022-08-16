const Router = require('express')
const router = new Router()

const typeController = require('../../contollers/type.controller.js')
const roleMiddleware = require('../../middlewares/role.middleware.js')

router.post('/', roleMiddleware, typeController.create)
router.get('/', roleMiddleware, typeController.get)

module.exports = router
