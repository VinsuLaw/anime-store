const ApiError = require('../exceptions/api.error.js')
const typeService = require('../services/type.service.js')

class TypeController {
    async create(req, res, next) {
        try {
            const newType = req.query.name
            if (!newType || newType.length === 0) {
                return next(ApiError.BadRequest('Type is not entered'))
            }

            const type = await typeService.create(newType)

            return res.json(type)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async get(req, res, next) {
        try {
            const types = await typeService.get()
            return res.json(types)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new TypeController()
