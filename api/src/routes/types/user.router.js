const Router = require('express')
const router = new Router()
const { body } = require('express-validator')

const userController = require('../../contollers/user.controller.js')
const authMiddleware = require('../../middlewares/auth.middleware.js')

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 6, max: 16 }),
    userController.registration
)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)

module.exports = router
