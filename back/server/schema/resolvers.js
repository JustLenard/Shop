const Product = require('../models/Product')

const resolvers = {
    Query: {
        getAllProducts: async () => {
            return await Product.find()
        },
        getProduct: async (_parent, { id }, _context, _info) => {
            return await Product.findById(id)
        },
    },
    Mutation: {
        addProduct: async (parent, args, context, info) => {
            const { name, price, description } = args.product
            console.log('This is name', name)
            const product = new Product({ name, price, description })
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
