import React, { useState } from 'react'
import './Style.css'

function NewTodo(props) {
    const [todo,setTodo]=useState({title:"",desc:"",
    })
 

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTodos(todo);
        setTodo({title:"",desc:""})
       
    }
    const addStyle ={
      textAlign:"center",
      color:"#eff5ff",
      fontSize:"22px",
    }

  return (
    <div>
      <h3 style={addStyle}>Todo App</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title...' value={todo.title} onChange={(e)=> setTodo({...todo, title: e.target.value})}  />
            <input type="text" placeholder='Description...' value={todo.desc} onChange={(e)=> setTodo({...todo, desc: e.target.value})}  />
            <button type="submit" className='btn'>Add Todo</button>
        </form>
    </div>
  )
}
export default NewTodo
