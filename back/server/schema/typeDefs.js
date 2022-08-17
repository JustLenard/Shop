const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Product {
        price: Int!
        name: String!
        currentcy: String!
        description: String!
        image: String!
    }

    # Query
    type Query {
        getAllProducts: [Product!]!
    }
`

module.exports = { typeDefs }
