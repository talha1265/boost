import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    // const mongoURI = "mongodb+srv://mohdtalha206:GhIBnMlPsOBNVuKf@cluster0.zni5ydw.mongodb.net/boost?retryWrites=true&w=majority";

    // if (!mongoURI) {
    //   throw new Error(
    //     "MongoDB URI not found. Please set the 'MONGODB_URI' environment variable."
    //   ); 
    // }
    await mongoose.connect("mongodb+srv://mohdtalha206:GhIBnMlPsOBNVuKf@cluster0.zni5ydw.mongodb.net/boost?retryWrites=true&w=majority");
    console.log("connected");
  } catch (error) {
    console.log("error:", error.message);
  }
};

export default dbConnect;
