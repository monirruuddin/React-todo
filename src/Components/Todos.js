import React from 'react'
import Todo from './Todo';

function Todos(props) {
    const {todos} =props
  return (
    <div> 
        { todos.map((todo)=> <Todo todo={todo.todo} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>) }
    </div>
  )
}
export default Todos;