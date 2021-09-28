import React, {useState, Fragment, useRef, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import { TodoList } from "./components/TodoList";
import './App.css';

const KEY = "todoApp.todos"

export function App(){
    const todoNombreRef = useRef();
    const [todos, setTodos] = useState([
        
    ]);

    useEffect(() => {
        const traerTodos = JSON.parse(localStorage.getItem(KEY));
        if (traerTodos) {
            setTodos(traerTodos);
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(todos));
    }, [todos]);

    const toggleTodo = (codigo) => {
        const nuevoTodo = [...todos];
        const todo = nuevoTodo.find((todo) => todo.codigo === codigo);
        todo.estado = !todo.estado;
        setTodos(nuevoTodo);
    }

    const handletodoadd = (event) => {
        const nombre = todoNombreRef.current.value;
        if (nombre === "") return;
    
        setTodos((prevTodos) => {
            return [...prevTodos, { codigo: uuidv4(), nombre, estado: false }];
        });
    
        todoNombreRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.estado);
        setTodos(newTodos);
    };

    const cambioTarea = (codigo) =>{
        const nuevoTodo = [...todos];
        const nombre = todoNombreRef.current.value;
        if (nombre === "") return;
        const todo = nuevoTodo.find((todo) => todo.codigo === codigo);
        todo.nombre = nombre;
        setTodos(nuevoTodo);
        todoNombreRef.current.value = null;

    };

    const deleteTarea =(codigo) =>{
        const newTodos = todos.filter((todo) => todo.codigo!==codigo);
        setTodos(newTodos);
    }

    return (
        <Fragment >
            <div className='contenedor'>
            <div className = 'frag'>
                <div className ='inicio'>
                <input className='text-es' ref = {todoNombreRef} type="text" placeholder = "Nueva Tarea" />
                <button className='button-an' onClick={handletodoadd}>Añadir</button>
                <button className='button-el' onClick={handleClearAll}>Eliminar</button>
                </div>

                <TodoList todos={todos} toggleTodo={toggleTodo} cambioTarea={cambioTarea}  deleteTarea ={deleteTarea}/>
                
                <div>
                    <h3> Tareas pendientes {todos.filter((todo) => !todo.estado).length}</h3>
                </div>
            </div>      
            </div>
        </Fragment>
    );

}