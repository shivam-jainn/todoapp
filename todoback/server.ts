import express, { Express, Request, Response , Application } from 'express';
import cors = require('cors');

import connectDB from './database/connectDB';

const dbURI = 'mongodb://localhost:3005/test1'

const app:Application = express();
const PORT = 3000;

app.use(express.json())

import todoapi_router from './api/todo';

app.use(cors());
app.use('/todos', todoapi_router);



app.get('/testapi',()=>{
    console.log("testing");
})


const startServer = (PORT:number)=>{
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