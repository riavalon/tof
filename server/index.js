const { ApolloServer } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

const PORT = 9523
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen(PORT).then(() => console.log(`Listening on port ${PORT}!`))
