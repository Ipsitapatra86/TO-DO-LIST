// Select elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create list item
    const li = document.createElement("li");

    // Create task text span
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    // Toggle completed on click
    taskSpan.addEventListener("click", function () {
        taskSpan.classList.toggle("completed");
    });

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    // Delete task
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Add elements to li
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    // Add li to list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});
