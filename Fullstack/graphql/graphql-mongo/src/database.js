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

// Connect to MongoAtlas
// const uri =  'mongodb+srv://admin:TEna6ueraJfNykAH@cluster0.t0pxkbg.mongodb.net/course'
// moongose.connect(uri, {
//     useNewUriParser: true,
//     useUnifiedTopology: true
// }).then((db) => console.log('DB connected'))
// .catch(err => console.log(err))