import Note from "../../models/Note"

const Query = {
    async getNotes() {
        return await Note.find()
    },
    async getNoteById(_, {id}) {
        const noteId = await Note.findById(id)
        return noteId
    },
    async getNoteByDate(_, {date}) {
        const noteDate = await Note.find({date})
        return noteDate
    },
    async getNoteByTile(_, {title}) {
        const noteDate = await Note.findOne({title})
        return noteDate
    }
}

export default Query