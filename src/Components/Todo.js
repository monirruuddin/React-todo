import React from 'react'
import './Style.css'


function Todo(props) {
    const {title,desc} = props.todo;
    const {id} = props;

  const handleBtn= (id)=>{
    props.onRemoveTodo(id)

  }
  return (
    <div class="card">
        <div>
            <h4>{title}</h4>
            <p>{desc}</p>
        </div>
        <button className='border0' onClick={()=>handleBtn(id)}><i class="fa fa-trash fa-2x"></i></button>
    </div>

  )
}
export default  Todo