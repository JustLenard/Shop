const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Price {
        currency: String!
        amount: Float!
        symbol: String!
    }

    type Attribute {
        displayValue: String!
        value: String!
    }

    type AttributeSet {
        name: String!
        type: String!
        items: [Attribute!]!
    }

    type Product {
        id: ID
        name: String!
        description: String!
        category: String!
        brand: String!
        prices: [Price]!
        attributes: [AttributeSet!]!
        gallery: [String!]!
    }

    # Query
    type Query {
        getAllProducts: [Product!]!
        getProduct(id: ID): Product
    }

    input AttributeInput {
        displayValue: String!
        value: String!
    }

    input AttributeSetInput {
        name: String!
        type: String!
        items: [AttributeInput!]!
    }

    input PriceInput {
        currency: String!
        amount: Float!
        symbol: String!
    }

    input ProductInput {
        name: String!
        description: String!
        category: String!
        brand: String!
        prices: [PriceInput!]!
        attributes: [AttributeSetInput!]!
        gallery: [String!]!
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
