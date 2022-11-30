import axios from 'axios';
import React, { useEffect } from 'react'
function Messages() {

  let getMSG= async()=>{
   
    let token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Y1YTU0OGIyMzVmYjAzZmIxNjE3NiIsImlzTG9nZ2luIjp0cnVlLCJpYXQiOjE2Njk2NjgzNDl9.9UJwAa5SHW_GdCjR0INjRoYbiRGkSq-4MF2NTGm8V5c";
    let headers={authorization:`tariq__${token}`};
      let {data} =await axios.get(`http://localhost:3000/api/v1/message/`,headers );
      console.log(data);
  }

  useEffect(()=>{
    getMSG();
  },[])
  return (
    <div>Messages</div>
  )
}

export default Messages