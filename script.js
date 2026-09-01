document.addEventListener("DOMContentLoaded", function() {
    loadTasks();
    updateTaskCount();
});

let taskInput = document.getElementById("taskInput");

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
    updateTaskCount();

    taskInput.value = "";
}

function createTaskElement(taskText) {
    let taskList = document.getElementById("taskList");

    let emptyMsg = document.getElementById("emptyMessage");
    if (emptyMsg) {
        emptyMsg.remove();
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    deleteButton.onclick = function () {
        li.remove();
        removeTaskFromLocalStorage(taskText);
        updateTaskCount();
        checkEmptyList();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}

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
    if (tasks.length === 0) {
        checkEmptyList();
    } else {
        tasks.forEach(task => createTaskElement(task));
    }
}

function removeTaskFromLocalStorage(taskToRemove) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTaskCount() {
    let tasks = getTasksFromLocalStorage();
    let countEl = document.getElementById("taskCount");
    countEl.textContent = `${tasks.length} task${tasks.length === 1 ? '' : 's'} remaining`;
}

function checkEmptyList() {
    let taskList = document.getElementById("taskList");
    if (taskList.children.length === 0) {
        let li = document.createElement("li");
        li.id = "emptyMessage";
        li.className = "empty-message";
        li.textContent = "No tasks yet.";
        taskList.appendChild(li);
    }
}