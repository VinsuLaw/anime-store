const ApiError = require('../exceptions/api.error.js')

module.exports = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({ message: err.message })
    }

    return res.status(500).json({ message: 'Unexpected error has occured' })
}
