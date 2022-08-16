const sequelize = require('../db.js')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER',
    },
})

const Cart = sequelize.define('cart', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
})

const Cart_Product = sequelize.define('cart_product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
})

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    typeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },

    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },

    img: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    infoIds: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: true,
    },
})

const Product_Info = sequelize.define('product_info', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const Product_Type = sequelize.define('product_type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

const Book_Genre = sequelize.define('book_genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

const Book_Author = sequelize.define('book_author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

const Product_Maker = sequelize.define('product_maker', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
})

const Rating = sequelize.define('rating', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    rate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

////////////////////////////////////////////////////////////////

User.hasOne(Cart)
Cart.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Cart.hasMany(Cart_Product)
Cart_Product.belongsTo(Cart)

Product.hasMany(Product_Info)
Product_Info.belongsTo(Product)

Product_Type.hasMany(Product)
Product.belongsTo(Product_Type)

Book_Genre.hasMany(Product_Info)
Product_Info.belongsTo(Book_Genre)

Book_Author.hasMany(Product_Info)
Product_Info.belongsTo(Book_Author)

Product_Maker.hasMany(Product_Info)
Product_Info.belongsTo(Product_Maker)

////////////////////////////////////////////////////////////////

module.exports = {
    User,
    Cart,
    Cart_Product,
    Rating,

    Product_Type,
    Book_Genre,
    Book_Author,
    Product_Maker,

    Product,
    Product_Info,
}
