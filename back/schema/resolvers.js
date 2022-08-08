const { products } = require("../data.js");

const resolvers = {
  Query: {
    getAllProducts() {
      return products;
    },
  },
};

module.exports = resolvers;
