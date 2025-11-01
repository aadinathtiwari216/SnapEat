import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatstack:99636798@cluster0.vwjytpi.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}