import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'
export default function Todoitem(props) {
  const { todo, removeTodo, completeTodo } = props
  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
        {todo.text}
        <div className='iconsConteiner'>
        <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)}/>
        <BiCheckCircle onClick={() => completeTodo(todo.id)}/>
        </div>
    </div>
  )
}
