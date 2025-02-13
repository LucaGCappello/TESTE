import React from 'react'
import "./TaskCard.css"
import Tag from "./Tag"
const TaskCard = ({title, tags,  handleDelete, index}) => {
  return (
    <article className='TaskCard'>
      <p className='tasktext'>{title}</p>
      <div className='taskcardbottomline'>
        <div className='taskcardtags'>
          {
            tags.map((tag, index) => <Tag key={index} tagName={tag} selected/>)
          }
        </div>
        <div className='taskdelete' onClick={() => handleDelete(index)}>
          <p>del</p>
        </div>
      </div>
    </article>
  )
}

export default TaskCard