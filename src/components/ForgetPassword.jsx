import axios from 'axios';
import React from 'react'
// import { Link } from 'react-router-dom'

function ForgetPassword() {

    async function forgetPassword(e){
        e.preventDefult()
        await axios.patch(`http://localhost:3000/api/v1/auth/sendCode`,{email:"m2men1999@gmail.com"})
        .then ((res)=> 
        {let {data}=res; console.log(res)
        })
        .catch((err)=>{
          console.log(err);
        })
      }
  return (
    <div className="container text-center my-5">
    <div className="user my-3">
      <i className="fas fa-user-secret user-icon" />
      <h4 className="login">forget my password</h4>
    </div>

    <div className="card p-5 w-50 m-auto">
      <form method="POST" action="/handleLogin">
        <input
          className="form-control"
          placeholder="Enter your email"
          
          type="text"
          name="email"
        />
        <button onClick={(e)=>forgetPassword(e)} className="btn btn-default-outline my-4 w-100 rounded" type="submit"> send a code </button>
      </form>
    </div>
  </div>
  )
}

export default ForgetPassword