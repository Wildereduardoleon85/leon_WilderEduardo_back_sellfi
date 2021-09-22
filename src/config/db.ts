import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.rlvr5.mongodb.net/wheaterAppDatabase?retryWrites=true&w=majority`

const connectDB = async() => {
    await mongoose.connect(mongoURI, ()=> console.log('connected to database'))
}

export default connectDB;