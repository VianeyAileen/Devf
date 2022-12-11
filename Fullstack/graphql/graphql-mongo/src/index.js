import express from "express"
import {connect} from "./database.js";
import {graphqlHTTP} from "express-graphql"
import schema from "./schema.js";
// import './database'

const app = express()
connect()

app.use('/graphql-playground', graphqlHTTP ({
    schema: schema,
    graphiql: true
}))

app.get('/api/welcome', (req, res) => {
    res.send('Hello world!')
})

app.listen('3000', () => {
    console.log('Running...');
})