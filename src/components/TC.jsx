import React from 'react'
import TaskCard from './TaskCard'

const TC = ({state, tasks, status, handleDelete }) => {
      
  return (
    <section className='Task_Column'>
        <h2 className='task_column_heading'>{state}</h2>
        {
          tasks.map((task, index) => task.status === status && <TaskCard key={index} task={task} title={task.task} 
          tags={task.tags}
          handleDelete= {handleDelete}
          index={index}/>)
        }
        </section>
  )}


export default TC