import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';

function Profile() {
    // let [profileImg , setProfileImg] = useState("");
    let token = localStorage.getItem("token");
    let decoded = jwtDecode(token);
    let [user , setUser]=useState({});

    async function getUser(){
       let {data} = await axios.get("http://localhost:3000/api/v1/auth/allusers");
       let user = data.users.find((correct , index)=>{
        return correct._id == decoded.id;
       })
       setUser(user);
       
     }
     useEffect(()=>{
        getUser();
       },[]);
  return (
    <>
    <div className='height-100 d-flex justify-content-center align-items-center background'>
     <div className='d-flex d-flex justify-content-center align-items-center flex-column bg-color  w-100 box-shadow'>
        <h2 className='my-5 py-4 text-capitalize w-100 box-shadow text-center bg-navy'>welcome to saraha </h2>
        <h2 className='userInfo text-capitalize mb-5'> <i className="fa-regular fa-user"></i> {user.userName} </h2>
        <h3 className='userInfo mb-5'><i className="fa-solid fa-at"></i> {user.email}</h3>
     </div>
    </div>
    </>
  )
}

export default Profile