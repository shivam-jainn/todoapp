const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
    todotext : String,
    done : Boolean,
    todoID : Number,
})


const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    todos : [todoSchema]
});

const todo = mongoose.model('todo', todoSchema);
const User = mongoose.model('user', userSchema);

module.exports = {todo,User}