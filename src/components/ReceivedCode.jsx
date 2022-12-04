import axios from 'axios'
import { func } from 'joi';
import React from 'react'
import { useState } from 'react';

function ReceivedCode() {
  let[newPw,setNewPw]=useState('');
  let[coode,setCode]=useState('');
  let[mail,setMail]=useState('');
  async function updatePass(e){
    e.preventDefault();
    await axios.patch('http://localhost:3000/api/v1/auth/forgetpassword', {email:mail,code:coode,password:newPw})
    .then((res)=>{
      let {data}=res;
      console.log(data);
    }).catch((err)=>{
      console.log(err)
    })
  }
  function getNewPw(e){
    newPw=e.target.value;
    console.log(newPw)

  }
  function getMail(e){
    mail=e.target.value;
    console.log(mail)
  }
  function getCode(e){
    coode=e.target.value;
    console.log(coode)
  }

  return (
    <div className="container text-center my-5">
    <div className="user my-3">
      <i className="fas fa-user-secret user-icon" />
      <h4 className="login">update my password</h4>
    </div>

    <div className="card p-5 w-50 m-auto">
      <form method="POST" action="/handleLogin">
        <input
          className="form-control"
          placeholder="Enter Your Email"
          type="text"
          name="email"
          onChange={getMail}
          
        />

        <input
          className="form-control"
          placeholder="Enter your  Code"
          type="text"
          name="email"
          onChange={getCode}
        />

        <input
          className="form-control"
          placeholder="Enter your new Password"
          type="text"
          name="email"
          onChange={getNewPw}
        />
        <button onClick={(e)=>updatePass(e)}  className="btn btn-default-outline my-4 w-100 rounded" type="submit"> update your Password </button>
      </form>
    </div>
  </div>
  )
}

export default ReceivedCode