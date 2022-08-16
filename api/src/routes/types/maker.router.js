const Router = require('express')
const router = new Router()

const makerController = require('../../contollers/maker.controller.js')
const roleMiddleware = require('../../middlewares/role.middleware.js')

router.post('/', roleMiddleware, makerController.create)
router.get('/', roleMiddleware, makerController.get)

module.exports = router
