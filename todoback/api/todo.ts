import express, { Express, Request, Response , Application,Router } from 'express';
import todo from "../model"


const todoapi_router:Router = express.Router();

// Get all todos
todoapi_router.get('/showlist', async (req:Request, res:Response) => {
    try {
        const allTodo = await todo.find();
        res.status(200).json(allTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add a new todo
todoapi_router.post('/addTask', async (req:Request, res:Response) => {
    try {

        const done:boolean = req.body;
        const todotext:string = req.body;

        const newTodo = new todo({
            todotext: todotext,
            done : done,
        });

        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating todo' });
    }
});

// Delete a todo by ID
todoapi_router.post('/deleteTask', async (req:Request, res:Response) => {
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

todoapi_router.put('/updateComplete', async (req:Request, res:Response) => {
    try {

        const { todoid } = req.body;
        const done:boolean = req.body;

        const updatedTodo:boolean = await todo.findOneAndUpdate(
            { _id: todoid },
            { done: !(done)  },
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


export default todoapi_router;