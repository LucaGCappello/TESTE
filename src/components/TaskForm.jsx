import React from 'react'
import "./TaskForm.css";
import Tag from "./Tag";
import { useState } from 'react';


const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags:[]
    });

    const checkTag = (tag) => {
        return taskData.tags.includes(tag);
    };
    
    const selectTag = (tag) =>{
        if(taskData.tags.some(item => item === tag)){
           const filterTags = taskData.tags.filter(item => item !== tag)
           setTaskData(prev => {
            return  {...prev, tags : filterTags};
           });

        } else {
            setTaskData((prev) => {
                return {...prev, tags : [...prev.tags, tag]}
            });   
        }
    };


    const handleChange = (e) => { 
        const {name, value} = e.target; // object destructuring (thanks daniel)

        setTaskData(prev => {   //its the part resposible to update the state
            return {...prev, [name] : value}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    console.log("Adding Task:", taskData);
    setTasks(prev => {
        return [...prev, taskData]
    });
    setTaskData({
        task: "",
        status: "todo",
        tags:[]
    });
    

    };
    // const [task, setTask] = useState("")
    // const [status, setStatus] = useState("To Do")


    // const handleStatusChange = e => {
    //     setStatus(e.target.value);
    // }

    // const handleTaksChange = e => {
    //     setTask(e.target.value);
    // }


    // console.log(task);
  return (
    <header className="app_header">
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name ="task"
            value = {taskData.task}
            className='task_input' 
            placeholder='Whats your next task?' 
            onChange={handleChange} />

                <div className='taskbottomline'>
                    <div>
                        <Tag tagName= "HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                        <Tag tagName= "CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                        <Tag tagName= "JS" selectTag={selectTag} selected={checkTag("JS")}/>
                        <Tag tagName= "React" selectTag={selectTag} selected={checkTag("React")}/>
                        
                    </div>
                    <div>
                    <select className='task_status' 
                    value = {taskData.status}
                    onChange={handleChange}
                    name ="status">
                        <option value = "todo">To Do</option>
                        <option value = "doing">Doing</option>
                        <option value = "done">Done</option>
                    </select>
                    </div>
                <button 
                    className='task_submit'
                    type='submit'
                    onClick={handleSubmit}>
                    + Add Task
                </button>
                </div>
        </form>
    </header>
  )
}

export default TaskForm