NOTES:

graphQL is a query language. Meaning it works almost kind of like SQL. Where we can call on a thing and get only that thing back, just within the call itself


graphQL query is communicating to a route like a get method (querying the data) 
graphQL mutation is like a put, post, and delete method (mutating the data)


type User {
    id: ID!
    name: String!
    age: Int!
    height: Float!
    isMarried: Boolean
    friends: [User!]
    videosPosted: [Video]
}

type Video {
    id: ID!
    title: String!
    description: String!
}

1. ! means we are requiring the field (not null)
2. 5 Types in GraphQL ID, String, Int, Float, and Boolean
3. We can 'relate' data or get a list of users by putting square brackets around the type: [User]
4. We can also require the type within the list with: [User!]