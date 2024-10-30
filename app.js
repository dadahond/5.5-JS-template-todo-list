const template = document.querySelector("template");
const addNewTodo = document.getElementById("add-new-todo");
const list = document.getElementById("list");
const textInput = document.getElementById("text-input");

function deleteTodo(e) {
    e.closest("li").remove();
}

function doneTodo(e) {
    e.closest("li").classList.toggle("done");
}

addNewTodo.addEventListener("click", () => {
    const value = textInput.value.trim();
    value
        ?
        (() => {
            const clone = template.content.cloneNode("true");
            const p = clone.querySelector("p");
            const done = clone.querySelector("#done");
            const deleteBtn = clone.querySelector("#delete");
            deleteBtn.setAttribute("onclick", `deleteTodo(this)`);
            done.setAttribute("onclick", `doneTodo(this)`);
            p.textContent = textInput.value;
            list.appendChild(clone);
            textInput.value = "";
        })() :
        alert("Hech nima yozlimadi");
});