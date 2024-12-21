import mongoose from "mongoose";

export default function connectDB() {
    mongoose.connect("mongodb://localhost:27017/Slice", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
}