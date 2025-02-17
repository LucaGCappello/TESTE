<<<<<<< HEAD
=======


>>>>>>> 3c64a77 (Last comm)
import React from 'react'
import TaskCard from './TaskCard'

const TC = ({state, tasks, status, handleDelete }) => {
      
  return (
    <section className='Task_Column'>
        <h2 className='task_column_heading'>{state}</h2>
<<<<<<< HEAD
        {
          tasks.map((task, index) => task.status === status && <TaskCard key={index} task={task} title={task.task} 
          tags={task.tags}
          handleDelete= {handleDelete}
          index={index}/>)
        }
        </section>
=======
            {
           tasks.map((task, index) => task.status === status && <TaskCard key={index} task={task} title={task.task} 
           tags={task.tags}
         handleDelete= {handleDelete}
          index={index}/>)
        }
        </section>
    
>>>>>>> 3c64a77 (Last comm)
  )}


export default TC