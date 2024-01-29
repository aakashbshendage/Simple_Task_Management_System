// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let tasks = [];

// Get all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add a new task
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    tasks.push(newTask);
    res.json(newTask);
});

// Edit a task
app.put('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    tasks[id] = { title, description };
    res.json(tasks[id]);
});

// Delete a task
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const deletedTask = tasks[id];
    tasks.splice(id, 1);
    res.json(deletedTask);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
