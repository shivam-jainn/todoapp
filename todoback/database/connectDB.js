const mongoose = require('mongoose')


function connectDB(dbURI){
    mongoose
    .connect(dbURI)
    .then(()=>{
        console.log("mongo connected");
    })
    .catch((error)=>{
        console.error(error);
    })
}


module.exports = {connectDB}