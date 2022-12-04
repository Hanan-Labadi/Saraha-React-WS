import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

function ForgetPassword() {
  let [emailInfo,setEailInfo]=useState('');
  let navigate = useNavigate();
    function getEmailInfo(e){
      emailInfo=e.target.value;
    }
    function goToReceivedCode(){
      let path = '/ReceivedCode';
      navigate(path)
    }
    async function forgetPassword(e){
      e.preventDefault();
        await axios.patch(`http://localhost:3000/api/v1/auth/sendCode`,{email:emailInfo})
        .then ((res)=> 
        {let {data}=res; console.log(data)
        })
        .catch((err)=>{
          console.log(err);
        })
        goToReceivedCode()
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
          onChange={getEmailInfo}
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