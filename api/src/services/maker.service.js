const { Product_Maker } = require('../models/index.js')

class MakerService {
    async create(name) {
        try {
            return await Product_Maker.create({ name })
        } catch (error) {
            throw error
        }
    }

    async get() {
        try {
            return await Product_Maker.findAll()
        } catch (error) {
            throw error
        }
    }
}

module.exports = new MakerService()
