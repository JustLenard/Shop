const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Product {
    price: Int!
    name: String!
  }

  # Query
  type Query {
    getAllProducts: [Product!]!
  }
`;

module.exports = typeDefs;
