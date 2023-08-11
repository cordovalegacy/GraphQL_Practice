const { UserList, MovieList } = require("../utils/dummyData")
const _ = require("lodash") // lodash allows us to use psuedo model calls like .find

const resolvers = {

    Query: {
        users: () => UserList, //same as users(){ return UserList }
        user: (parent, args) => {
            const id = args.id
            const user = _.find(UserList, {id: Number(id)})
            return user
        },

        movies: () => MovieList,
        movie: (parent, args) => {
            const title = args.title
            const movie = _.find(MovieList, {title: title})
            return movie
        }
    },
    User: {
        favMovies: () => MovieList.filter((movie) => ( movie.id !== 1 && movie.id !== 2 ))
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input
            console.log(user)
            const lastId = UserList[UserList.length-1].id
            user.id = lastId + 1
            UserList.push(user)
            return user
        },
        updateEmail: (parent, args) => {
            const { id, newEmail } = args.input
            let updatedUser
            UserList.forEach((user) => {
                if(user.id === id){
                    user.email = newEmail
                    updatedUser = user
                }
            })
            return user
        }
    }

}

module.exports = { resolvers }