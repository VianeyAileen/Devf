import mongoose from 'mongoose'

export async function connect() {
    try {
        let url = "mongodb://127.0.0.1:27017/notas"
        await mongoose.connect(url, {
            useNewUrlParser: true
        })
        console.log('Database connected!!', url)
    } catch (error) {
        console.log(error)
    }
}