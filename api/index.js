require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')

const sequelize = require('./src/db.js')
const router = require('./src/routes/index.js')
const errorHandle = require('./src/middlewares/error.middleware.js')

const app = express()
const PORT = process.env.PORT || 3080

app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT,
    })
)
app.use(express.json())
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))

app.use('/api', router)

app.use(errorHandle)

app.get('/', (req, res, next) => {
    res.status(200).json({ message: 'ok' })
})

async function startApp() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () =>
            console.log(`Server is running on ${PORT} port...`)
        )
    } catch (error) {
        console.log(error)
    }
}

startApp()
