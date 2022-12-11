import moongose from 'mongoose'

export async function connect() {
    const url = 'mongodb://127.0.0.1:27017/mongodbgraphql'
    try {
        await moongose.connect( url, {
            useNewUrlParser: true
        })
        console.log("Database connected!!", url);        
    } catch (error) {
        return console.log(error);
    }
}

export default connect