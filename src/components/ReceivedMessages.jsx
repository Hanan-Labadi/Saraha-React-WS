
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
  useEffect(()=>{
    getMsg();
  })
  return (
      <>
      <table className="table w-75" >
        <thead>
           <tr>
            <th scope="col">id</th>
            <th scope="col">messsage</th>
            <th scope="col">message time</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
         {
           messageList.map((message,id)=>
           <tr key={message._id}>
             <td>{id}</td>
             <td>{message.text}</td>
             <td>{message.createdAt}</td>
             <td><button type="button" class="btn btn-danger">Delete</button></td>
           </tr>)
          }
          </tbody>                   
        </table>
      </>
      
    
  )
}

export default ReceivedMessages