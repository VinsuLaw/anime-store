const ApiError = require('../exceptions/api.error.js')
const productService = require('../services/product.service.js')

class ProductController {
    async create(req, res, next) {
        try {
            let { typeId, name, price, description, info } = req.body
            const { img } = req.files
            if (info) {
                info = JSON.parse(info)
            }
            const productData = await productService.create(
                {
                    typeId,
                    name,
                    price,
                    description,
                    info,
                },
                img
            )
            return res.json(productData)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let { typeId, limit, page } = req.query
            page = page || 1
            limit = limit || 20
            let offset = page * limit - limit
            const products = await productService.getAll(typeId, limit, offset)
            return res.json(products)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }

    async getOne(req, res, next) {
        try {
            let id = req.params.id
            id = parseInt(id)
            if (!id) {
                return next(ApiError.BadRequest('ID is not entered'))
            }

            const product = await productService.getOne(id)
            return res.json(product)
        } catch (error) {
            return next(ApiError.BadRequest(error.message))
        }
    }
}

module.exports = new ProductController()
