import React, { useState,useEffect } from 'react'
import Todos from './Todos'
import './Style.css'
import NewTodo from './NewTodo'
import { v4 as uuidv4 } from 'uuid';


function Home() {
    const [todos,setTodos] = useState([]);


    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('items'));
        if (todos) {
            setTodos(todos);
        }
      }, []);
      
  
        localStorage.setItem('todos', JSON.stringify(todos));
      
    
const addStyle={
    marginTop:"20px",
}
const handleTodo =(todo)=>{
    console.log(todo.title,todo.desc);
    if(todo.title !== "" && todo.desc !== ""){
        setTodos((prevTodos)=>{
            return [...prevTodos,{id:uuidv4(),todo}]
    
        });
    }
    
} 
const handleRemoveTodo=(id)=>{
    const filTerTodo = todos.filter((todo)=> todo.id !== id);
    setTodos(filTerTodo);
}
  return (
    <div>
        <div className='mainTodos'>
        <NewTodo onAddTodos={handleTodo} />
        </div>
        <div className='mainTodos' style={addStyle}>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    </div>
  )
}
export default Home
