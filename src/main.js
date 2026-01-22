const input = document.getElementById("task-input");
const button = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");

// botón para agregar tareas
button.addEventListener("click", () => {
    const taskText = input.value;

    if (taskText === ""){
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // interacción de tachado de elementos
    li.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    list.appendChild(li);
    input.value = "";
});

// botón para borrar tareas completadas
const clearButton = document.getElementById("clear-done-btn");

clearButton.addEventListener("click", () => {
    const tasks = document.querySelectorAll("#task-list .done");
    tasks.forEach(task => task.remove());
})