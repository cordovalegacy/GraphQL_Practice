const { UserList } = require("../utils/dummyData")

const resolvers = {

    Query: {
        users: () => UserList
        //same as users(){ return UserList }
    }

}

module.exports = { resolvers }