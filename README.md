Student Task Manager

A simple web-based Student Task Manager built using HTML, CSS, and JavaScript. It allows students to add tasks and delete completed or unwanted tasks.

Features
Add a new task
Delete a task
Prevent adding empty tasks
Simple and clean user interface
Responsive task list styling
Technologies Used
HTML5
CSS3
JavaScript
Git
GitHub
Project Structure
student-task-manager/
│
├── index.html
├── script.js
├── style.css
├── package.json
├── package-lock.json
└── README.md

How to Run
1. Clone the repository
git clone https://github.com/ishwari1201/student-task-manager.git

2. Open the project
cd student-task-manager

3. Run the application

Open index.html in a web browser.

Alternatively, you can open the project using VS Code and use a Live Server extension.

How to Use
Enter a task in the input box.
Click Add Task.
The task will appear in the task list.
Click Delete next to a task to remove it.
Git & GitHub Workflow

The project uses a feature-branch workflow for collaborative development.

# Get the latest code
git checkout main
git pull origin main

# Create a feature branch
git checkout -b feature/delete-task

# Make changes to the project

# Check changes
git status
git diff

# Stage changes
git add .

# Commit changes
git commit -m "Add delete task feature"

# Push feature branch
git push -u origin feature/delete-task


After pushing the branch, a Pull Request can be created on GitHub to review and merge the changes into the main branch.

Feature Added
Delete Task

Each task now has a Delete button. Clicking the button removes the selected task from the task list.

The implementation uses JavaScript to create a delete button dynamically for every new task.

Future Improvements

Possible future features include:

Mark tasks as completed
Edit existing tasks
Task priority levels
Due dates
Task categories
Save tasks using Local Storage
Search and filter tasks
Author

Ishwari

Repository

GitHub Repository: student-task-manager
