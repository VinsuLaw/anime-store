const uuid = require('uuid')
const path = require('path')
const { Product, Product_Info } = require('../models/index.js')

class ProductService {
    async create({ typeId, name, price, description, info }, img) {
        try {
            let filename = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname, '..', '..', 'static', filename))

            if (info) {
                const informationIds = await createInfo(info)
                const productData = await Product.create({
                    name,
                    price,
                    typeId,
                    description,
                    infoIds: informationIds,
                    img: filename,
                })

                return productData
            } else {
                const productData = await Product.create({
                    name,
                    price,
                    typeId,
                    description,
                    img: filename,
                })

                return productData
            }
        } catch (error) {
            throw error
        }
    }

    async getAll(typeId, limit, offset) {
        try {
            let products

            if (!typeId) {
                products = await Product.findAndCountAll({ limit, offset })
            }

            if (typeId) {
                products = await Product.findAndCountAll({
                    where: { typeId },
                    limit,
                    offset,
                })
            }

            return products
        } catch (error) {
            throw error
        }
    }

    async getOne(id) {
        try {
            const product = await Product.findOne({ where: { id } })
            return product
        } catch (error) {
            throw error
        }
    }
}

async function createInfo(info) {
    return new Promise((res, rej) => {
        let information = []
        let i = 0

        info.forEach(async (object) => {
            for (let key in object) {
                const productInfo = await Product_Info.create({
                    title: key,
                    description: object[key],
                })
                information.push(productInfo.id)
                i++
                if (info.length === i) {
                    res(information)
                }
            }
        })
    })
}

module.exports = new ProductService()
