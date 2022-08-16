const { User, Cart } = require('../models/index.js')
const ApiError = require('../exceptions/api.error.js')
const TokenService = require('./jwt.service.js')

const bcrypt = require('bcrypt')

class UserService {
    async registration(email, password) {
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            throw ApiError.BadRequest('Such user already registered')
        }

        const passwordHash = await bcrypt.hash(password, 12)
        const user = await User.create({ email, password: passwordHash })
        const cart = await Cart.create({ userId: user.id })

        const userData = await this.authorize(user.id, email, user.role)

        return userData
    }

    async login(email, password) {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            throw ApiError.BadRequest("Such user doesn't registered")
        }

        const samePasswords = await bcrypt.compare(password, user.password)
        if (!samePasswords) {
            throw ApiError.BadRequest('Wrong password')
        }

        const userData = await this.authorize(user.id, email, user.role)

        return userData
    }

    async authorize(id, email, role) {
        const accessToken = TokenService.Generate(
            { id, email, role },
            process.env.JWT_SECRET_DEFAULT,
            '15m'
        )

        const refreshToken = TokenService.Generate(
            { id, email, role },
            process.env.JWT_SECRET_DEFAULT,
            '30d'
        )

        return { accessToken, refreshToken }
    }
}

module.exports = new UserService()
