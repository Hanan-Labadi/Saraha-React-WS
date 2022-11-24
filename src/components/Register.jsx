import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom';





function Register() {  
let navigate=useNavigate();
function goTologin(){
  let path='/login'
  navigate(path)
}
  let [User,setUser]= useState (
    {
      userName:"",    
         email:"",
      password:"",
      cpassword:"",
    }
    
  )
  let[loading,setloading]=useState(false);
  let[errorlist,setErrorlist]=useState([]);


  let getUser=(e)=>{

 setUser( {...User,[e.target.name]:e.target.value});
 console.log(User);
  }
  let sendData=async(e)=>{
    e.preventDefault();
   let validateResult =validateForm();
    //setErrorlist(validateResult.error.details)
    let {data}=await axios.post("http://localhost:3000/api/v1/auth/signup",User);
   if(data.message=="done" ){
     goTologin();

    }
         setloading(true);

    
  }
  function validateForm(){
    const schema=Joi.object({
     userName:Joi. string().alphanum().min(4).max(10).required(),
     email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
     password:Joi.string().required(),
     cpassword: Joi.ref('password'),


    });
    return schema.validate(User,{abortEarly:false});
  }
  return (
   
     <>
    <div className="container text-center my-5">
  <div className="user my-3">
    <i className="far fa-edit user-icon" />
    <h4 className="login">Register</h4>
  </div>
  <div className="card p-5 w-50 m-auto">
 {errorlist.map( (error,index) =>
      <div className='alert alert-danger'>{error.message}</div>
        )}
  
    <form  onSubmit={sendData} method="POST" action="/handleLogin">
      <input onChange={getUser} className="form-control" placeholder="Enter your Name" type="text" name="userName" />
      <input onChange={getUser} className="form-control my-2 " placeholder="Enter your email" type="email" name="email" />
      <input onChange={getUser} className="form-control  " placeholder="Enter your Password" type="password" name="password" />
      <input onChange={getUser} className="form-control  my-2" placeholder="Password Confirmation" type="password" name="cpassword" />
      <button className="btn btn-default-outline my-4 w-100 rounded" type="submit">
        
{loading ? (<i className="fa-solid fa-spinner fa-spin"></i>) : ("register") 
}
    
</button>
<button type='button' className="btn btn-default-outline"onClick={goTologin}>login </button>


    </form>
  </div>
</div>
</>
  )
}

export default Register