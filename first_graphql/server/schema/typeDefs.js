const { gql } = require('apollo-server')

// !query type is the first level of graphql

// * type [Field] is how to define the schema of your data
// * type Query is the function that will query the resolver functions
// * getting all just requires the type
// * getting one requires the type and the "filter"
// * enum [FieldName] is how to setup required fields

const typeDefs = gql`

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        age: Int!
        nationality: Nationality!
        friends: [User]
        favMovies: [Movie]
    }

    type Movie {
        id: ID!
        title: String!
        releaseDate: String!
        isForKids: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User!
        movies: [Movie!]!
        movie(title: String!): Movie! 
    }

    enum Nationality {
        US
        Hungary
        India
    }

`

module.exports = { typeDefs }