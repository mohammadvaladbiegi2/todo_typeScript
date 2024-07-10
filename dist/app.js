import { GenerateID, addtodo, showlistTod } from './utils.js';
window.addEventListener("DOMContentLoaded", () => {
    let loading = document.querySelector(".loading");
    loading.style.display = "block";
    showlistTod();
    loading.style.display = "none";
});
let todo_title = document.querySelector(".todo_title");
let add_todo_btn = document.querySelector(".add_todo_btn");
add_todo_btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (todo_title.value) {
        let title = todo_title.value;
        let todo = {
            id: GenerateID(),
            title,
            iscomplite: false
        };
        addtodo(todo);
        todo_title.value = "";
    }
    else {
        alert("title is empty:((");
    }
});
