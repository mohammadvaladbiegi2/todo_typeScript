import {Todo} from './type'
import { addtodo } from './utils.js';


let todo:Todo = {
    id: 1,
    title:"learn js",
    iscomplite:false
}

console.log("app ts"); 
console.log("type todo",todo );
console.log(" todo", addtodo(todo) );

