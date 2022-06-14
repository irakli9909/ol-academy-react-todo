import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'
export default function Todoitem(props) {
  const { todo, removeTodo, completeTodo } = props
  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
        {todo.text}
        <div className='iconsConteiner'>
        <RiCloseCircleLine className='check' style={{ marginRight: 5}} onClick={() => removeTodo(todo.id)}/>
        <BiCheckCircle className='check' onClick={() => completeTodo(todo.id)}/>
        
        
        </div>
    </div>
  )
}
