const Router = require('express')
const router = new Router()

const genreController = require('../../contollers/genre.controller.js')
const roleMiddleware = require('../../middlewares/role.middleware.js')

router.post('/', roleMiddleware, genreController.create)
router.get('/', roleMiddleware, genreController.get)

module.exports = router
