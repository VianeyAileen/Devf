import Note from "../../models/Note"

const Mutation = {
    async createNote(_, {input}) {
        return await Note.create(input)
    },
    async updateNote(_, {input, _id}) {
        const updateNote = await Note.findByIdAndUpdate(_id, input, {new: true})
        return updateNote
    },
    async removeNote(_, {id}) {
        await Note.findByIdAndDelete(id)
        return await Note.find()
    }
}

export default Mutation