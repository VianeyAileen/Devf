import moongose from 'mongoose';

const courseSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: String,
    isReleased: Boolean
})

//The name of the model must be in singular to prevent issues with the mongoose collection process
export default moongose.model('Course', courseSchema)