import React, {useState} from 'react'
import { MdOutlineDeleteSweep } from 'react-icons/md'

export default function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      if(input.length >= 1){
        props.addTodo(input)
      }
      setInput('')
    }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input
          value = {input}
          onChange={(e) =>setInput(e.target.value)}
          className='todo-input'
          placeholder='დაამატეთ რამე'/>
        <button type='submit' className='todo-button'>დამატება</button>
        <button className='deleteAll' style={{marginLeft: 5}} onClick={props.deleteAll}>წაშლა</button>
    </form>
  )
}
