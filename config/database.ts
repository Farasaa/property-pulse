import mongoose from "mongoose";


let connected = false;

const connectDB = async () => {
    if (connected) { 
        console.log("Already connected to the database");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        connected = true;
        console.log("Connected to the database");
    }catch (error) {
        console.error("Database connection error:", error);
    }
}



export default connectDB;