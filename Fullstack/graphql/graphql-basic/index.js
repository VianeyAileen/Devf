const express = require ('express')
const app = express()

const {buildSchema} = require ('graphql')
const {graphqlHTTP} = require ('express-graphql')
const {courses} = require ('./data.json')

// Cosntruimos el schema
const schema = buildSchema(`
   type Query {
    getWelcome: String 
    getName(name: String, age: Int): String
    getCourses: [Course]
   } 

   type Course {
    id: Int
    title: String
    description: String
   }
`)

const getWelcome = () => {
    return 'Hola mundo' //porque el schema regresa un String
}

const getName = (args) => {
    return 'Hello ' + args.name + ' ' + args.age
}

const getCourses = () => {
    return courses
}

const root = {
    //properties que tiene el (Schema): functions que resuleve el query/mutations
    getWelcome: getWelcome,
    getName: getName,
    getCourses: getCourses
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server is running!!');
})