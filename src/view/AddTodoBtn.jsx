import React from 'react'

export default function AddTodoBtn() {

  const addTask = () => {
    console.log("test")
  }
  return (
    <div>
      <button className='btn btn-primary addTask' onClick={addTask} id='open'>
        <i className="bi bi-plus"></i>
        Add Task
      </button>
    </div>
  )
}
