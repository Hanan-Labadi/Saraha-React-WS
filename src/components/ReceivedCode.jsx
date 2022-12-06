import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
function ReceivedCode() {
  let[newPw,setNewPw]=useState('');
  let[coode,setCode]=useState('');
  let[mail,setMail]=useState('');
  let navigate = useNavigate();
  function login() {
    let path = "/login";
    navigate(path);
  }
  async function updatePass(e){
    e.preventDefault();
    await axios.patch('http://localhost:3000/api/v1/auth/forgetpassword', {email:mail,code:coode,password:newPw})
    .then((res)=>{
      let {data}=res;
      console.log(data.message);
      if(data.message=="Done")
      {swal({
        title: "Success!",
        text: "Your password is updated",
        icon: "success",
        button: "DONE!",
      });
      login();
    }else if(data.message=="In-valid account or In-valid OTP Code"){
        swal({
          title: "Fail!",
          text: "In-valid account or In-valid OTP Code",
          icon: "error",
          button: "Cancel!",
        });

      }
    })
  }
  function getNewPw(e){
    newPw=e.target.value;
    

  }
  function getMail(e){
    mail=e.target.value; 
  }
  function getCode(e){
    coode=e.target.value;
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
          className="form-control mt-2"
          placeholder="Enter your  Code"
          type="text"
          name="email"
          onChange={getCode}
        />

        <input
          className="form-control mt-2"
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