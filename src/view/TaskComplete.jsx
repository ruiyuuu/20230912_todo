import React, {useState} from 'react'
import DatePicker from 'react-date-picker';
// import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';



export default function TaskComplete({task,toggleComplete,deleteTask}) {
  
  const [date, changeHandle] = useState(new Date());

  // const [startDate, setStartDate] = useState(new Date());
  const [value, onChange] = useState('10:00');

  
  return (
    <form onClick={() => toggleComplete(task.id)}>
      <div className="accordion-item taskCard">
          <div className="d-flex flex-column">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${task.id}`} aria-expanded="false" aria-controls={`flush-collapse${task.id}`}>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <h6 className='taskTitle w-100'>{task.task}</h6>
              <button className='iconBtn'><i className="bi bi-star fa-3x starMark"></i></button>
              <button className='iconBtn'><i className="bi bi-pencil penMark"></i></button>
              <button className='iconBtn' onClick={()=>deleteTask(task.id)}><i class="bi bi-trash trash"></i></button>
            </button>
            <div id={`flush-collapse${task.id}`} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="d-flex flex-column gap-4 taskBody">
                <div className="d-flex flex-column item">
                  <div className="d-flex">
                    <i className="bi bi-calendar-event me-2"></i>
                    <h6 className='title'>Deadline</h6>
                  </div>
                  <div className="d-flex gap-4 input">
                    {/* <input type="date" className="form-control" placeholder="yyyy/mm/dd" /> */}
                    <DatePicker onChange={changeHandle} value={date} />
                    {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                    <TimePicker onChange={onChange} value={value} />
                    {/* <input type="time" className="form-control" placeholder="hh:mm" /> */}
                  </div>
                </div>
                <div className="d-flex flex-column item">
                  <div className="d-flex">
                    <i className="bi bi-folder me-2"></i>
                    <h6 className='title'>File</h6>
                  </div>
                  <div className="d-flex gap-4 input">
                    <input type="file" className="form-control d-none" id='file'/>
                    <label htmlFor="file">
                      <i className="bi bi-plus-square-fill file"></i>
                    </label>
                  </div>
                </div>
                <div className="d-flex flex-column item">
                  <div className="d-flex">
                    <i className="bi bi-chat-dots me-2"></i>
                    <h6 className='title'>Comment</h6>
                  </div>
                  <div className="d-flex gap-4 input">
                    <input type="text" className="form-control comment" placeholder="Type your memo here…" />
                  </div>
                </div>
              </div>
              <div className="btns d-flex">
                <button className='btn btn-secondary taskBtnSecondary'>
                  <i className="bi bi-x xMark"></i>
                  Cancel</button>
                <button className='btn btn-primary taskBtnPrimary'>
                  <i className="bi bi-plus addMark"></i>
                  Add Task</button>
              </div>
            </div>
          </div>
        </div>
    </form>
  )
}
