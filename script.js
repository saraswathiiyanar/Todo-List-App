let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// SAVE TO LOCAL STORAGE
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

// ADD TASK
function addTask() {
  let input = document.getElementById("taskInput");
  let text = input.value.trim();

  if (text === "") return;

  tasks.push({ text: text, completed: false });
  input.value = "";

  saveTasks();
}

// MARK AS COMPLETED
function completeTask(index) {
  tasks[index].completed = true;
  saveTasks();
}

// DELETE TASK
function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
}

// SHOW TASKS
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        <span class="${task.completed ? "completed" : ""}">
          ${task.text}
        </span>

        <div>
          <button class="complete-btn" onclick="completeTask(${index})">
            Completed
          </button>

          <button class="remove-btn" onclick="deleteTask(${index})">
            Remove
          </button>
        </div>
      </li>
    `;
  });
}

// LOAD ON START
renderTasks();