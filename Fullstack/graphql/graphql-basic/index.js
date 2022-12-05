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
    getCourse(id: Int): Course 
   } 

   type Mutation {
    addCourse(id: Int!, title: String!, description: String): [Course]
    updateCourse(id: Int, title: String, description: String): Course
    removeCourse(id: Int): [Course]
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

const getCourse = ({id}) => {
    // let getIndex = courses.findIndex(index => index.id == id)
    return courses.find(index => index.id == id)
}

const addCourse = ({id, title, description}) => {
    // create object
    const newCourse = {id: id, title: title, description: description}
    // push the object to []
    courses.push(newCourse)
    // return the collection []
    return courses
}

const updateCourse = ({id, title, description}) => {
    // Find the course
    courses.map(course => {
        if (course.id == id) {
            course.title = title ? title : course.title
            course.description = description ? description : course.description
        }
        return course
    })
    // Return object by id
    return courses.find(course => course.id == id)
}

const removeCourse = ({id}) => {
    // Find the course to remove
    let getIndex = courses.findIndex(index => index.id == id)
    // Remove the course
    courses.splice(getIndex, 1)
    // Return courses without the removed course
    return courses
}

const root = {
    //properties que tiene el (Schema): functions que resuleve el query/mutations
    getWelcome: getWelcome,
    getName: getName,
    getCourses: getCourses,
    addCourse: addCourse,
    updateCourse: updateCourse,
    removeCourse: removeCourse,
    getCourse: getCourse
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('Server is running!!');
})