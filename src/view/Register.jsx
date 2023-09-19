import React,{ useState } from 'react'
import axios from 'axios';

export default function Register() {

  const [email, setEmail] = useState("")
  
  const [pwd, setPwd] = useState("")
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    axios.post('https://hex-escape-room.herokuapp.com/api/user/signup',{email:email,password:pwd})
      .then(function(response){
        console.log(response.data)
        setEmail("")
        setPwd("")
      })
  }



  return (
    <>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input 
              type="password" 
              className="form-control" 
              id="floatingpwd" 
              placeholder="password" 
              value={pwd} 
              onChange={(e) => setPwd(e.target.value)} 
            />
            <label htmlFor="floatingpwd">pwd</label>
          </div>
          <button className='btn btn-primary' >Submit</button>
        </div>
      </form>
      <a href="./Login">已有帳號，點此登入</a>
    </>
  )
}
