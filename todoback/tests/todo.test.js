const express = require('express');
const request = require('supertest');
const todoapi_router = require('../api/todo'); // Update the path to match your file structure
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use('/todos', todoapi_router);

describe('Todo API Routes', () => {
    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:3005/test1', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        // Disconnect from MongoDB after tests
        await mongoose.connection.db.dropDatabase();
        await mongoose.disconnect();
    });

    it('should add a new todo', async () => {
        const newTodo = { todotext: 'Test Todo', done: false };
        const response = await request(app).post('/todos/addTask').send(newTodo);
        expect(response.status).toBe(201);
        expect(response.body.done).toBe(false);
    });

    it('should fetch all todos', async () => {
        const response = await request(app).get('/todos/showlist');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('Update a todo based on ID', async () => {
        const newTodo = { todotext: 'Test Todo', done: false };
        const addResponse = await request(app).post('/todos/addTask').send(newTodo);

        const todoID = addResponse.body._id; // Get the ID from the previous add response
        const updateResponse = await request(app).put('/todos/updateComplete').send({ todoid: todoID });

        console.log(updateResponse.body);

        expect(updateResponse.status).toBe(200);
        // expect(updateResponse.text).toBe("updated Todo");
    });

    it('Delete a todo based on ID', async () => {
        const newTodo = { todotext: 'Test Todo', done: false };
        const addResponse = await request(app).post('/todos/addTask').send(newTodo);

        const todoID = addResponse.body._id; // Get the ID from the previous add response
        const deleteResponse = await request(app).post('/todos/deleteTask').send({ todoid: todoID });

        console.log(deleteResponse.body);
        expect(deleteResponse.status).toBe(200);
        // expect(deleteResponse.text).toBe("deleted Todo");
    });
});
