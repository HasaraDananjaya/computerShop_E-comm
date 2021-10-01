import Mongoose from "mongoose";

const connectDB = () => {
    if(Mongoose.connections[0].readyState){
        console.log('Already Connected...')
        return;
    }
    Mongoose.connect(process.env.MONGODB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, err => {
        if(err) throw err;
        console.log('Connected to MongoDB...')
    })

}

export default connectDB