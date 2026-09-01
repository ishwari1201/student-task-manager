// Load tasks from Local Storage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);

let taskInput = document.getElementById("taskInput");

// Allow pressing "Enter" key to add a task
taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTaskElement(taskText);
    saveTaskToLocalStorage(taskText);

    taskInput.value = "";
}

function createTaskElement(taskText) {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
        removeTaskFromLocalStorage(taskText);
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);
}

// Local Storage Functions
function getTasksFromLocalStorage() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = getTasksFromLocalStorage();
    tasks.forEach(function (task) {
        createTaskElement(task);
    });
}

function removeTaskFromLocalStorage(taskToRemove) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}