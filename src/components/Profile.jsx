import axios from 'axios';
// import { func } from 'joi';
import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

function Profile() {
  

  let [details,setDetails] = useState('');
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzEwOTcwYjg3ODBmMWZkYjAwMmNjZSIsImlzTG9nZ2luIjp0cnVlLCJpYXQiOjE2NjgzNTI0MTN9.LuwEs4Qk4WsNxWCcfuxfUCwDMzzaJEw1FH3osPCjQKE'
  let autherization= 'tariq__'+token;
  let decoded = jwtDecode(autherization);
  // async function getProfile(){
    //   let {data} = await axios.get(`//localhost:3000/api/v1/user/profile`);
  //   setDetails(data);
  // }
  
  
  let getProfile= async(e)=>{
    e.preventDefault();
    let {data} = await axios.get(`//localhost:3000/api/v1/user/profile`);
    setDetails(data);
  }
  getProfile()
  
  console.log(decoded)
  
  return (
       <div className="row">
          <p>{details.message}</p>
       </div>
  )
}

export default Profile