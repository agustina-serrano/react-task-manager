const button = document.getElementById("add-btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = "Button clicked!";
});