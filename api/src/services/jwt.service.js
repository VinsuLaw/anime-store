const jwt = require('jsonwebtoken')

module.exports = class TokenService {
    static Generate(payload, secret, lifetime) {
        return jwt.sign(payload, secret, { expiresIn: lifetime })
    }

    static Validate(token, secret) {
        try {
            return jwt.verify(token, secret)
        } catch (e) {
            return null
        }
    }
}
