const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    getPost(input: ID!): Post
    getPosts: [Post]!
  }

  type Post {
    postId: ID!
    author: String!
    postedOn: String!
    content: String!
    title: String!
    excerpt: String!
  }
`

module.exports = typeDefs