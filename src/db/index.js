import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
        const logs = console.dir(connectionInstance, { depth: null });
    } catch(error) {
        console.log("MongoDB connection error.", error);
        process.exit(1); //node js process codes
    }
}

export default connectDB