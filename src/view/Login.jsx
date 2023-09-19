import React,{ useState,useEffect } from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Snippet from './Snippet'

export default function Login() {

  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const Swal = require('sweetalert2')

  
  
  const userEmail = (e) =>{
    setEmail(e.target.value)
  }
  
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    setLoading(true)

    axios.post('https://hex-escape-room.herokuapp.com/api/user/signin',{email:email,password:pwd})
    .then(function(response){
      if( response.data.success === true){
        console.log(response.data.success)
        setEmail("")
        setPwd("")
        localStorage.setItem('email',JSON.stringify(email))
        setLoading(false)
        history.push("/")
      } else {
        console.log(response.data.success)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: '請重新確認帳號密碼',
          footer: '<a href="">需要幫助?</a>',confirmButtonText: '確認',
        })
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    if(localStorage.getItem("email")){
      history.push("/")
    }
  })


  

  if(loading){
    return <Snippet/>
  }else
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="d-flex gap-3">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control" 
              id="floatingInputLogin" 
              placeholder="name@example.com" 
              value={email} 
              onChange={userEmail} 
            />
            <label htmlFor="floatingInputLogin">Email address</label>
          </div>
          <div className="form-floating">
            <input 
              type="password" 
              className="form-control" 
              id="floatingpwdLogin" 
              placeholder="password" 
              value={pwd} 
              onChange={(e) => setPwd(e.target.value)} 
            />
            <label htmlFor="floatingpwdLogin">pwd</label>
          </div>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>
      <a href="./Register">還沒有帳照?註冊新帳號</a>
    </>
  )
}
