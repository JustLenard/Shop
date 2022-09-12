const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    // image: {
    //     type: String,
    // },
    price: {
        type: Number,
    },
    // currency: {
    //     type: String,
    // },
})

module.exports = mongoose.model('Product', ProductSchema)
