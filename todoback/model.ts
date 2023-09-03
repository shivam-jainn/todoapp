import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    todotext : String,
    done : Boolean,
})


const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    todos : [todoSchema]
});

const todo = mongoose.model('todo', todoSchema);
const User = mongoose.model('user', userSchema);

export default {todo,User};