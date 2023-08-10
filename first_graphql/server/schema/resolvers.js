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
    }

}

module.exports = { resolvers }