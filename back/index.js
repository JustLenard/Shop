const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

const express = require('express')

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    await server.start()

    server.applyMiddleware({ app })
}

startServer()

const app = express()

app.listen({ port: 3001 }, () => {
    console.log(`🚀 Server ready at http://localhost:3001`)
})
// console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);
