import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT);
        console.log(`Connected to DB`)
    } catch (error) {
        console.log(`Connect DB fail`)
        throw  error;
    }
}


