const { ApolloServer } = require("apollo-server-express");
const { gql } = require("apollo-server-express");

// const { typeDefs } = require("./schema/typeDefs");
// const { resolvers } = require("./schema/resolvers");

const express = require("express");

const app = express();

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

const resolvers = {
  Query: {
    getAllProducts() {
      return products;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log(`🚀 Server ready at http://localhost:3001`);
});
// console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
