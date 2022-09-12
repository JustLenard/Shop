const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Product {
        id: ID
        name: String
        price: Int
        description: String
    }

    # Query
    type Query {
        getAllProducts: [Product!]!
        getProduct(id: ID): Product
    }

    input ProductInput {
        name: String
        price: Int
    }

    #Mutations
    type Mutation {
        addProduct(product: ProductInput): Product
        deleteProduct(id: ID): String
        updateProduct(id: ID, product: ProductInput): Product
    }
`

module.exports = { typeDefs }

// currentcy: String!
// description: String!
// image: String!
