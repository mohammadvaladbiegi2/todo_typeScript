import {Todo} from './type'
import { GenerateID, addtodo, showlistTod } from './utils.js';



window.addEventListener("DOMContentLoaded",() => {
    let loading = document.querySelector(".loading") as HTMLDivElement
    loading.style.display = "block"
    showlistTod()
    loading.style.display = "none"
})


let todo_title = document.querySelector(".todo_title") as HTMLInputElement
let add_todo_btn = document.querySelector(".add_todo_btn") as HTMLButtonElement




add_todo_btn.addEventListener("click", (e):void => {

    e.preventDefault()
    if(todo_title.value){

        let title:string = todo_title.value
        
        let todo:Todo = {
            id: GenerateID(),
            title,
            iscomplite:false
        }

        
        addtodo(todo)  
        todo_title.value = ""
    }else{
        alert("title is empty:((")
    }
})



