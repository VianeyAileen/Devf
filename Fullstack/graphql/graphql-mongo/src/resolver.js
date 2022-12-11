import Course from "./models/Course.js"

export const resolvers = {
    Query: {
        async getCourses() {
            const course = await Course.find()
            return course
        },
        async getCourseById(_, {id}) {
            const courseId = await Course.findById(id)
            return courseId
        }
    },
    Mutation: {
        async createCourse(_, {input}){
            // {title: test, descriprion: desTest, .....}
            return await Course.create(input)
        },
        async updateCourse(_, {input, _id}) {
            const updateCourse = await Course.findByIdAndUpdate(_id, input, {new: true})
            return updateCourse
        },
        async removeCourse(_, {_id}) {
            const removeCourse = await Course.findByIdAndDelete(_id).find()
            return removeCourse
        }
    }
}