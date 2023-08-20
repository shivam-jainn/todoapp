const { default: mongoose } = require("mongoose");

const todoSchema = new mongoose.Schema({
    todotext : String,
    done : Boolean,
    todoID : Number,
})


const todo = mongoose.model('todo', todoSchema);

module.exports = {todo}