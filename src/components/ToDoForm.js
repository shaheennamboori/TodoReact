 import React, {useState} from 'react'
 
 export const ToDoForm = ({addTodo}) => {
  const [value, setValue] = useState("")
    const handleSubmit = event => {
        event.preventDefault();

        addTodo(value)

        setValue("")
    }

   return (
     <form className='TodoForm' onSubmit={handleSubmit}>
        <input value={value} type='text' className='todo-input' placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add</button>
     </form>
   )
 }
 