import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true, // To use the new MongoDB connection string parser
            useUnifiedTopology: true, // To enable the new connection management engine
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure code
    }
};

export default connectDB;
