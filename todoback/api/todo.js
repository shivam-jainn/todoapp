const express = require('express');
const { todo } = require('../model');

const todoapi_router = express.Router();

// Get all todos
todoapi_router.get('/showlist', async (req, res) => {
    try {
        const allTodo = await todo.find();
        res.status(200).json(allTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add a new todo
todoapi_router.post('/addTask', async (req, res) => {
    try {


        const { todotext, done } = req.body;

        const newTodo = new todo({
            todotext,
            done,
            // Don't set todoID here, it's usually assigned by MongoDB automatically
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating todo' });
    }
});

// Delete a todo by ID
todoapi_router.post('/deleteTask', async (req, res) => {
    try {
        const { todoid } = req.body;

        const deletedTodo = await todo.findOneAndDelete({ _id: todoid });
        
        if (!deletedTodo) {
            res.status(404).json({ error: 'Todo not found' });
            return;
        }

        res.status(200).json({ message: 'Todo deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update a todo's completion status by ID
todoapi_router.put('/updateComplete', async (req, res) => {
    try {
        console.log(req.body);
        const { todoid } = req.body;

        const updatedTodo = await todo.findOneAndUpdate(
            { _id: todoid },
            { done: true },
        );

        if (!updatedTodo) {
            res.status(404).json({ error: 'Todo not found' });
            return;
        }

        res.status(200).json(updatedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = todoapi_router;
