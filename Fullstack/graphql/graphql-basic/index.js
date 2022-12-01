const express = require ('express')
const app = express()

const {buildSchema} = require ('graphql')
const {graphqlHTTP} = require ('express-graphql')

// Cosntruimos el schema
const schema = buildSchema(`
   type Query {
    getWelcome: String 
   } 
`)

const getWelcome = () => {
    return 'Hola mundo' //porque el schema regresa un String
}

const root = {
    //properties que tiene el (Schema): functions que resuleve el query/mutations
    getWelcome: getWelcome
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server is running!!');
})