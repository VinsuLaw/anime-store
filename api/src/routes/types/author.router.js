const Router = require('express')
const router = new Router()

const authorController = require('../../contollers/author.controller.js')
const roleMiddleware = require('../../middlewares/role.middleware.js')

router.post('/', roleMiddleware, authorController.create)
router.get('/', roleMiddleware, authorController.get)

module.exports = router
