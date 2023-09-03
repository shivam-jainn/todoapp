import mongoose from "mongoose";


function connectDB(dbURI: string){
    mongoose
    .connect(dbURI)
    .then(()=>{
        console.log("mongo connected");
    })
    .catch((error)=>{
        console.error(error);
    })
}

export default connectDB;