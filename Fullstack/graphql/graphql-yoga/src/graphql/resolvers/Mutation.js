import Note from "../../models/Note"

const Mutation = {
    async createNote(_, {input}) {
        return await Note.create(input)
    },
    async updateNote(_, {input, _id}) {
        const updateNote = await Note.findByIdAndUpdate(_id, input, {new: true})
        return updateNote
    },
    async removeNote(_, {_id}) {
        const removeNote = await Note.findByIdAndDelete(_id).find()
        return removeNote
    }
}

export default Mutation