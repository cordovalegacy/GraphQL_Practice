const { ApolloServer } = require("apollo-server")




// !type defs give graphql types, and resolvers are the functions that do graphql stuff
const server = new ApolloServer({ typeDefs, resolvers })


server
    .listen()
    .then(({ url }) => {
        console.log("Server is up and running on: ", url)
    })