const ApiError = require('../exceptions/api.error.js')
const TokenService = require('../services/jwt.service.js')

module.exports = async function (req, res, next) {
    try {
        const { refreshToken } = req.cookies
        const decoded = TokenService.Validate(
            refreshToken,
            process.env.JWT_SECRET_DEFAULT
        )

        if (!refreshToken || !decoded) {
            return res.status(401).json({ message: 'Not authorized' })
        }

        if (decoded.role !== 'ADMIN') {
            return res.status(403).json({ message: 'Forbidden' })
        }

        console.log('fdfd')

        next()
    } catch (e) {
        return res.status(401).json({ message: 'Not authorized' })
    }
}
