const { products } = require('../data.js')

const Product = require('../models/Product')

const resolvers = {
    Query: {
        getAllProducts() {
            return Product.find()
        },
    },
}

module.exports = { resolvers }
