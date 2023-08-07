const { gql } = require('apollo-server')

//query type is the first level of graphql

const typeDefs = gql`

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        age: Int!
        nationality: String!
    }

    type Query {
        users: [User!]!
        friends: [User!]
    }

`

module.exports = { typeDefs }