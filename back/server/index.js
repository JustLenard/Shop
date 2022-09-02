const colors = require('colors')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')
const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers })
    await server.start()

    server.applyMiddleware({ app })
}

startServer()

const app = express()

app.listen({ port: port }, () => {
    // console.log(`🚀 Server ready at http://localhost:${port}`)
})
// console.log(`🚀 Server ready at http://localhost:3001${server.graphqlPath}`);

const getWord = (arr, num) => {
    const uniqueWords = []

    arr.forEach((element) => {
        if (!uniqueWords.includes(element)) {
            uniqueWords.push(element)
        }
    })

    const toReturn = uniqueWords.map((uniqueWord) => {
        if (arr.filter((word) => word !== uniqueWord).length === num) {
            return 'f'
        } else {
            return 'fuck'
        }
    })

    return toReturn
}

let response = getWord(
    ['zone', 'zone', 'zone', 'abigail', 'theta', 'form', 'libe', 'zas'],
    2
)

console.log('This is i', response)
