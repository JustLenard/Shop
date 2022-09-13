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
            const {
                name,
                description,
                category,
                prices,
                attributes,
                brand,
                gallery,
            } = args.product
            console.log('This is prices', prices)
            console.log('This is name', attributes)
            console.log('This is attributes.items', attributes[0])
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
