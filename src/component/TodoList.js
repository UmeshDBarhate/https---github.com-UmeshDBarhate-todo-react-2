import React, { } from 'react'

const TodoList = ({todos,handleEdit,handleDelete}) => {
  return (
   <ul>
    {todos.map((t)=>{return(
      <li>
      <span key={t.id}>{t.todo}</span>
      <button onClick={()=> handleEdit(t.id)}> EDIT</button>
      <button onClick={()=> handleDelete(t.id)}> DELETE</button>
  </li>
    )
        
    })}
   </ul>
  )
}

export default TodoList