const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

button.addEventListener("click", () => {
    const taskText = input.value;

    if (taskText === ""){
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    list.appendChild(li);
    input.value = "";
});