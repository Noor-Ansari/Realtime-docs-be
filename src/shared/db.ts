import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://noor_mohammad:noorcoder.123@cluster0.o00sr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
