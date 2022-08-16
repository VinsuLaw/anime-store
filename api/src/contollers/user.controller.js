const { validationResult } = require('express-validator')

const ApiError = require('../exceptions/api.error.js')
const userService = require('../services/user.service.js')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest(errors.array()))
            }

            const { email, password } = req.body
            const userData = await userService.registration(email, password)

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })

            return res.json(userData)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const userData = await userService.login(email, password)

            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })

            return res.json(userData)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async check(req, res, next) {
        const userData = req.user
        if (userData?.refreshToken) {
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            })
        }
        return res.json(userData)
    }
}

module.exports = new UserController()
