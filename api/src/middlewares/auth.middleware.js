const ApiError = require('../exceptions/api.error.js')
const TokenService = require('../services/jwt.service.js')

module.exports = async function (req, res, next) {
    try {
        const accessToken = req.headers.authorization.split(' ')[1]
        const { refreshToken } = req.cookies

        if (!accessToken || !refreshToken) {
            const err = ApiError.UnauthorizedError()
            return res.status(err.status).json({ message: err.message })
        }

        let jwtAccess_Decoded = TokenService.Validate(
            accessToken,
            process.env.JWT_SECRET_DEFAULT
        )

        if (!jwtAccess_Decoded) {
            jwtRefresh_Decoded = TokenService.Validate(
                refreshToken,
                process.env.JWT_SECRET_DEFAULT
            )

            if (!jwtRefresh_Decoded) {
                const err = ApiError.UnauthorizedError()
                return res.status(err.status).json({ message: err.message })
            }

            const newAccessToken = TokenService.Generate(
                {
                    id: jwtRefresh_Decoded.id,
                    email: jwtRefresh_Decoded.email,
                },
                process.env.JWT_SECRET_DEFAULT,
                '15m'
            )

            const newRefreshToken = TokenService.Generate(
                {
                    id: jwtRefresh_Decoded.id,
                    email: jwtRefresh_Decoded.email,
                },
                process.env.JWT_SECRET_DEFAULT,
                '30d'
            )

            req.user = {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            }

            next()
        }

        next()
    } catch (e) {
        const err = ApiError.UnauthorizedError()
        return res.status(err.status).json({ message: err.message })
    }
}
