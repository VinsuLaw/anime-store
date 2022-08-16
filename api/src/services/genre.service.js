const { Book_Genre } = require('../models/index.js')

class GenreService {
    async create(name) {
        try {
            return await Book_Genre.create({ name })
        } catch (error) {
            throw error
        }
    }

    async get() {
        try {
            return await Book_Genre.findAll()
        } catch (error) {
            throw error
        }
    }
}

module.exports = new GenreService()
