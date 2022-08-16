const ApiError = require('../exceptions/api.error.js')
const authorService = require('../services/author.service.js')

class AuthorController {
    async create(req, res, next) {
        try {
            const newAuthor = req.query.name
            if (!newAuthor || newAuthor.length === 0) {
                return next(ApiError.BadRequest('Author is not entered'))
            }

            const author = await authorService.create(newAuthor)

            return res.json(author)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async get(req, res, next) {
        try {
            const authors = await authorService.get()
            return res.json(authors)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new AuthorController()
