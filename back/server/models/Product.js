const mongoose = require('mongoose')

const Price = new mongoose.Schema({
    currency: {
        type: String,
        required: true,
    },
    amount: {
        required: true,
        type: Number,
    },
})

const Attribute = new mongoose.Schema({
    displayValue: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
})

const AttributeSet = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['size', 'color'],
    },
    items: [Attribute],
})

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        enum: ['Women', 'Men'],
    },
    brand: {
        type: String,
        required: true,
    },
    prices: [Price],
    attributes: [AttributeSet],
    gallery: [
        {
            type: String,
            required: true,
        },
    ],
})

module.exports = mongoose.model('Product', ProductSchema)
