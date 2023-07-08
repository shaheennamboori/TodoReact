import React, {useState} from 'react'
 
export const EditToDoForm = ({editTodo, task}) => {
 const [value, setValue] = useState(task.task)
   const handleSubmit = event => {
       event.preventDefault();

       editTodo(value, task.id)

       setValue("")
   }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
       <input value={value} type='text' className='todo-input' placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
       <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
