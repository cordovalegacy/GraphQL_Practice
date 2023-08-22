

const UserList = [

    {
        id: 1,
        firstName: "Brendan",
        lastName: "Cordova",
        email: "cordovalegacy19@gmail.com",
        age: 27,
        nationality: "US",
        friends: [
            {
                id: 2,
                firstName: "Tori",
                lastName: "Cordova",
                email: "t.mccullar@hotmail.com",
                age: 26,
                nationality: "US"
            }
        ]
    },
    {
        id: 2,
        firstName: "Tori",
        lastName: "Cordova",
        email: "t.mccullar@hotmail.com",
        age: 26,
        nationality: "US"
    },
    {
        id: 3,
        firstName: "Nandor",
        lastName: "Nagy",
        email: "nandor@booksbeatsbox.com",
        age: 34,
        nationality: "Hungary",
        friends: [
            {
                id: 2,
                firstName: "Tori",
                lastName: "Cordova",
                email: "t.mccullar@hotmail.com",
                age: 26,
                nationality: "US"
            }
        ]
    },
    {
        id: 4,
        firstName: "Mayur",
        lastName: "Nayak",
        email: "nayakm@gmail.com",
        age: 28,
        nationality: "India"
    },

]

const MovieList = [
    {
        id: 1,
        title: "The Lion King",
        releaseDate: "1994-06-15",
        isForKids: true
    },
    {
        id: 2,
        title: "Inception",
        releaseDate: "2010-07-16",
        isForKids: false
    },
    {
        id: 3,
        title: "Toy Story",
        releaseDate: "1995-11-22",
        isForKids: true
    },
    {
        id: 4,
        title: "Pulp Fiction",
        releaseDate: "1994-10-14",
        isForKids: false
    },
    {
        id: 5,
        title: "Finding Nemo",
        releaseDate: "2003-05-30",
        isForKids: true
    },
    {
        id: 6,
        title: "The Dark Knight",
        releaseDate: "2008-07-18",
        isForKids: false
    }
]

//will add more dummy data below

module.exports = { UserList, MovieList }