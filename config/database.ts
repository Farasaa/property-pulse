import mongoose from "mongoose";


let connected = false;

const connectDB = async () => {
    if (connected) { 
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        connected = true;
        console.log("Connected to the database");
    }catch (error) {
        console.error("Database connection error:", error);
        throw error;
    }
}



export default connectDB;