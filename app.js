// app.js
const taskListDiv = document.getElementById('task-list');
const taskFormDiv = document.getElementById('task-form');
let tasks = [];

function showAddTaskForm() {
    taskFormDiv.style.display = 'block';
}

function cancelTask() {
    taskFormDiv.style.display = 'none';
}

function saveTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (title && description) {
        const task = { title, description };
        tasks.push(task);
        renderTasks();
        cancelTask();
    } else {
        alert('Please fill in both title and description.');
    }
}

function editTask(index) {
    const task = tasks[index];
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    showAddTaskForm();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    taskListDiv.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskDiv = document.createElement('div');
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskListDiv.appendChild(taskDiv);
    });
}
