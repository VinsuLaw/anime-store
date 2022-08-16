const ApiError = require('../exceptions/api.error.js')
const genreService = require('../services/genre.service.js')

class GenreController {
    async create(req, res, next) {
        try {
            const newGenre = req.query.name
            if (!newGenre || newGenre.length === 0) {
                return next(ApiError.BadRequest('Genre is not entered'))
            }

            const genre = await genreService.create(newGenre)

            return res.json(genre)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async get(req, res, next) {
        try {
            const genres = await genreService.get()
            return res.json(genres)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new GenreController()
