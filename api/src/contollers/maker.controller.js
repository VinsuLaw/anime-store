const makerService = require('../services/maker.service.js')

class MakerController {
    async create(req, res, next) {
        try {
            const newMaker = req.query.name
            if (!newMaker || newMaker.length === 0) {
                return next(ApiError.BadRequest('Maker is not entered'))
            }

            const maker = await makerService.create(newMaker)

            return res.json(maker)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async get(req, res, next) {
        try {
            const makers = await makerService.get()
            return res.json(makers)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new MakerController()
