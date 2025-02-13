import React from 'react'
import "./App.css"
import TaskForm from './components/TaskForm'
import TC from './components/TC'
import { useState, useEffect } from 'react'

const oldTasks= localStorage.getItem("tasks")
console.log(oldTasks);

const App = () => {
  
  const [tasks, setTasks] = useState([JSON.parse(oldTasks)] || []);
  

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks]);

  
  const handleDelete =(taskIndex) => {
    const newTask = tasks.filter((task ,index) => index != taskIndex);
    setTasks(newTask)
  };

  return (

    <div className='app'>
      <TaskForm  setTasks={setTasks}/>
      <main className='app_main'> 
        <TC state= "todo" tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TC state= "Doing" tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TC state= "Done" tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App