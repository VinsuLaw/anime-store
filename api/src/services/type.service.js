const { Product_Type } = require('../models/index.js')

class TypeService {
    async create(name) {
        try {
            return await Product_Type.create({ name })
        } catch (error) {
            throw error
        }
    }

    async get() {
        try {
            return await Product_Type.findAll()
        } catch (error) {
            throw error
        }
    }
}

module.exports = new TypeService()
