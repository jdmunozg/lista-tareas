import React from "react";
import { TodoItem } from "./TodoItem";

export function TodoList ({todos, toggleTodo, cambioTarea,deleteTarea}){
    return(
        <ul>
            {todos.map((todo) =>(
                <TodoItem key={todo.codigo} todo={todo} toggleTodo={toggleTodo} cambioTarea={cambioTarea} deleteTarea={deleteTarea} />
            ))}
        </ul>
    )
}