const { ApolloServer } = require("apollo-server")
const { typeDefs } = require("./schema/typeDefs")
const { resolvers } = require("./schema/resolvers")


//type defs are like a schema
//resolvers are like controller functions
const server = new ApolloServer({ typeDefs, resolvers })


server
    .listen()
    .then(({ url }) => {
        console.log("Server is up and running on: ", url)
    })