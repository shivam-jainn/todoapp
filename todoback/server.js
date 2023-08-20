const express = require('express');
const cors = require('cors');

const {connectDB} = require('./database/connectDB')

const dbURI = 'mongodb://localhost:3005/test1'

const app = express();
const PORT = 3000;

app.use(express.json())
const todoapi_router = require('./api/todo'); 

app.use(cors());
app.use('/todos', todoapi_router);



app.get('/testapi',()=>{
    console.log("testing");
})


const startServer = (PORT)=>{
    try {
        app.listen(PORT,()=>{
            console.log("Connected successfully");
        });        
    } catch (error) {
        console.error(error);
        process.exit();
    }
}

connectDB(dbURI);
startServer(PORT);

module.exports = {app}