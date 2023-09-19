import React, {useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from "react-router-dom";
import Task from './Task'
import AddTodoBtn from './AddTodoBtn'
import TaskComplete from './TaskComplete';
uuidv4(); 

export default function Todolist() {
  
  const [ tasks, setTasks] = useState([])
  const history = useHistory()
  const Swal = require('sweetalert2')
  

  

  const addTask = (task) =>{
    const newTask = [...tasks, {id: uuidv4(), task: task, completed: false, isEditing: false}]
    setTasks(newTask)
    localStorage.setItem('task',JSON.stringify(newTask))
  }

  const toggleComplete = (id) =>{
    const newTask = tasks.map((task) => task.id === id ? {...task,completed: !task.completed} :task)
    setTasks(newTask)
    localStorage.setItem('task',JSON.stringify(newTask))
  }

  const deleteTask = (id) =>{
    const newTask = tasks.filter((task) => task.id !== id)
    setTasks(newTask)
  }

  useEffect(() => {
    if(!localStorage.getItem("email")) history.push("./Login")
  })


  // useEffect(() => {
  //   if ( localStorage.length > 0 ){
  //     const timer = setTimeout(() =>{
  //       localStorage.clear()
  //       Swal.fire({
  //         icon: 'error',
  //         title: '登入逾時',
  //         text: '登入逾時，請重新登入',
  //         footer: '<a href="">需要幫助?</a>',confirmButtonText: '確認',
  //       })
  //       history.push("/Login")
  //     },10000);
  //     return () => {
  //       clearTimeout(timer)
  //     }
  //   }
  // },[history])



  return (
    <>
        <ul className="nav nav-pills mb-3 justify-content-center bg" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">My Tasks</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">In Progress</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</button>
          </li>
          <li><h6>{localStorage.getItem("email")}</h6></li>
        </ul>
        <div className="container tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="d-flex flex-column align-items-center gap-3">
                <AddTodoBtn />
                <Task addTask={addTask}/>
                {tasks.map((task, index) => (
                  task.isEditing ?(
                    <Task task={task} key={task.id} />
                  ):(
                    <TaskComplete task={task} key={task.id} toggleComplete={toggleComplete} deleteTask={deleteTask} />
                  )))}
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">B</div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
        </div>
    </>
  )
}