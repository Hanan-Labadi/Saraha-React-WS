
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function ReceivedMessages() {
  let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2Y1YTU0OGIyMzVmYjAzZmIxNjE3NiIsImlzTG9nZ2luIjp0cnVlLCJpYXQiOjE2Njk3NjQyMzJ9.MHMWptbqXxMXBc0B8sWwgyJiTr3KoBISYcEIuWHxRMo`
  let [messageList,setMessageList]=useState([]);

  async function getMsg(){
       await axios.get(`//localhost:3000/api/v1/message/`,{headers:{authorization:`tariq__${token}`}})
      .then (res=> {let{data}= res
        setMessageList(data.messageList)
      })
      .catch(err=>{
        console.log(err);
      })
    }
    console.log(messageList[0].id);
  useEffect(()=>{
    getMsg();
  })
  return (
      <>
      {
        messageList[0]
      }
      </>
      
    
  )
}

export default ReceivedMessages