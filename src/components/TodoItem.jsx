import React from "react";

export function TodoItem ({todo, toggleTodo, cambioTarea,deleteTarea}){
    const {codigo,nombre,estado} = todo;

    const handleTodoClick = () => {
        toggleTodo(codigo);
    }
    const cambioNombre = () =>{
        cambioTarea(codigo);
    }

    const eliminarTarea = () => {
        deleteTarea(codigo);
    }
    return(
        <li>
            <input type="checkbox" className="check" checked={estado} onChange={handleTodoClick} />
            {nombre}
            <button className='cambio' onClick={cambioNombre}>Cambiar</button>
            <button className='eliminar' onClick={eliminarTarea}>Eliminar</button>
        </li>
    )
}