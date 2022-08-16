const Router = require('express')
const router = new Router()

const userRouter = require('./types/user.router.js')
const typeRouter = require('./types/type.router.js')
const authorRouter = require('./types/author.router.js')
const genreRouter = require('./types/genre.router.js')
const makerRouter = require('./types/maker.router.js')
const productRouter = require('./types/product.router.js')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/author', authorRouter)
router.use('/genre', genreRouter)
router.use('/maker', makerRouter)
router.use('/product', productRouter)

module.exports = router
