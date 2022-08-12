const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

require('dotenv').config()
const port = process.env.PORT || 5000

const express = require('express')

async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers })
  await server.start()

  server.applyMiddleware({ app })
}

startServer()

const app = express()

app.listen({ port: port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`)
})
// console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
