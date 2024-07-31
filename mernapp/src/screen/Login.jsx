import React from 'react'
import { useState } from 'react'
import 'react-notifications/lib/notifications.css'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {

  const [credentials, setcredentials] = useState({email:"",password:""})
  let navigate = useNavigate()
  const handleSubmit = async (event)=>{
      event.preventDefault();
      const response = await fetch("http://localhost:5000/api/loginuser",{
          method:'POST',
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify({email:credentials.email,password: credentials.password})
      })
      const json = await response.json()
      console.log(json)

      
      if(!json.success){
          alert("email or password is incorrect")
      }
      if(json.success){
        localStorage.setItem("authToken", json.authToken)
        console.log(localStorage.getItem("authToken"))
        navigate("/")
        alert("Login successful")
        // NotificationManager.success("Login successful")
    }
  }

  const onChange = (event)=>{
      setcredentials({...credentials, [event.target.name]:event.target.value})
  }


  return (
    <div>
      <div className='container'>
    <form className='m-3' onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} placeholder="Enter email" onChange={onChange}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else like facebook.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange}/>
  </div>
 
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to={"/createuser"} className='m-3 btn btn-danger'>Create account</Link>
</form>
</div>
    </div>
  )
}
