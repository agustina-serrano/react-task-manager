const input = document.getElementById("task-input");
const addButton = document.getElementById("add-task-btn");
const list = document.getElementById("task-list");
const clearButton = document.getElementById("clear-done-btn");

// función para guardar todas las tareas en localStorage
function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({
            text: li.textContent,
            done: li.classList.contains("done")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// función para cargar las tareas desde localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;

        if(task.done) li.classList.add("done");

        // elementos tachados
        li.addEventListener("click", () => {
            li.classList.toggle("done");
            saveTasks();
        });

        list.appendChild(li);
    });
}

// cargar tareas al iniciar página
loadTasks();

// botón para agregar tareas
addButton.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // interacción de tachado de elementos
    li.addEventListener("click", () => {
        li.classList.toggle("done");
        saveTasks();
    });

    list.appendChild(li);
    input.value = "";

    saveTasks();
});

// botón para borrar tareas completadas
clearButton.addEventListener("click", () => {
    document.querySelectorAll("#task-list .done").forEach(task => task.remove())
    saveTasks();
});