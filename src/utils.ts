import { Todo } from "./type";

let Todos: Todo[] = []

let getTodos:string = localStorage.getItem("Todos")!
let TodosData: [] = JSON.parse(getTodos)

if(TodosData){
     Todos = [...TodosData]

}

export function GenerateID(): number {
    let id:number = Math.floor(Math.random() * 100)
    return id
}

export  function addtodo(params: Todo):void {
Todos.push(params)
localStorage.setItem("Todos",JSON.stringify(Todos))
showlistTod()
}

export function showlistTod():void {
    let todo_container = document.querySelector(".todo_container")as HTMLDivElement 
    todo_container.innerHTML = "" 
    Todos.forEach((todo: Todo) => {
        const todoItem = document.createElement("li");
        todoItem.innerHTML = `
          <h1 class="${todo.iscomplite ? "complete" : ""}">${todo.title}</h1>
          <button class="complete-btn">Complete</button>
          <button class="remove-btn">Remove</button>
          <form>
          <input type="text" class="edite_input" placeholder="Edite Title" value="${todo.title}"/>
          <button class="edite_btn">Edite</button>
        </form>
        <hr />
        `;
        todo_container.appendChild(todoItem);
    
        const completeBtn = todoItem.querySelector(".complete-btn") as HTMLButtonElement;
        const removeBtn = todoItem.querySelector(".remove-btn") as HTMLButtonElement;
        const edite_btn = todoItem.querySelector(".edite_btn") as HTMLButtonElement;
        const edite_input = todoItem.querySelector(".edite_input") as HTMLInputElement;
    
        completeBtn.addEventListener("click", () => CompleteTodo(todo.id));
        removeBtn.addEventListener("click", () => RemoveTodo(todo.id));
        edite_btn.addEventListener("click", (e) => EditeTodo(e,edite_input.value,todo.id));
      });
}


export function RemoveTodo(id:number):void {
   Todos = Todos.filter(todo => todo.id !== id)
    localStorage.setItem("Todos",JSON.stringify(Todos))
    showlistTod()
    
}

export function CompleteTodo(id:number):void {

    Todos = Todos.map(todo => todo.id === id ? {...todo , iscomplite : !todo.iscomplite} : todo)
    localStorage.setItem("Todos",JSON.stringify(Todos))
    showlistTod()
    
}

export function EditeTodo(e:Event, newtitle:string ,id:number):void {
  
    
e.preventDefault()

if(newtitle.length){

    Todos = Todos.map(todo => todo.id === id ? {...todo , title : newtitle} : todo)
    localStorage.setItem("Todos",JSON.stringify(Todos))
    showlistTod()
}else{
    alert("Enter valid title")
}
    
}

