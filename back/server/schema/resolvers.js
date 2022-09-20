const Product = require('../models/Product')
const { addAllPrices } = require('../utils/moneyConveter.js')
const resolvers = {
    Query: {
        getAllProducts: async () => {
            return await Product.find()
        },
        getProduct: async (_parent, { id }, _context, _info) => {
            return await Product.findById(id)
        },

        getProductsByCategory: async (
            _parent,
            { category },
            context,
            _info
        ) => {
            return await Product.find({ category: category })
        },
    },
    Mutation: {
        addProduct: async (parent, args, context, info) => {
            let {
                name,
                description,
                category,
                prices,
                attributes,
                brand,
                gallery,
            } = args.product

            prices = addAllPrices(prices)

            const product = new Product({
                name,
                description,
                category,
                prices,
                attributes,
                brand,
                gallery,
            })
            await product.save()

            return product
        },

        deleteProduct: async (parent, { id }, context, info) => {
            await Product.findByIdAndDelete(id)
            return 'Done'
        },

        updateProduct: async (parent, args, context, info) => {
            const { id } = args
            const { name } = args.product
            const product = await Product.findByIdAndUpdate(
                id,
                { name },
                { new: true }
            )
            return product
        },
    },
}

module.exports = { resolvers }
