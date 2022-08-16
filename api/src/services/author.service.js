const { Book_Author } = require('../models/index.js')

class AuthorService {
    async create(name) {
        try {
            return await Book_Author.create({ name })
        } catch (error) {
            throw error
        }
    }

    async get() {
        try {
            return await Book_Author.findAll()
        } catch (error) {
            throw error
        }
    }
}

module.exports = new AuthorService()
