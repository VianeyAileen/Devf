// TypeDefs = type Definitions (Query, Mutation, Custom Types, etc)
// Resolvers = functions to resolve type definitions (Query, Mutation, etc)
import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolver.js'

const typeDefs = `
    type Query {
        getCourses: [Course]
        getCourseById(id: ID): Course
    }

    type Mutation {
        createCourse(input: courseInput): Course
        updateCourse(input: courseInput, _id: ID): Course
        removeCourse(_id: ID): [Course]
    }

    type Course {
        _id: ID
        title: String!
        description: String
        date: String
        isReleased: Boolean
    }

    input courseInput {
        title: String!
        description: String
        date: String
        isReleased: Boolean
    }
`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})