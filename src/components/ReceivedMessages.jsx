
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

function ReceivedMessages() {
  let token = localStorage.getItem("token");
  let [messageList,setMessageList]=useState([]);

  async function getMsg(){
       await axios.get(`http://localhost:3000/api/v1/message/`,{headers:{authorization:`tariq__${token}`}})
      .then ((res)=> 
      {let{data}= res;
        setMessageList(data.messageList);
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  useEffect(()=>{
    getMsg();
  },[messageList]);

  async function deleteMsg(idMsg){
     swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(async (willDelete) => {
      if (willDelete) {
        await axios.delete(`http://localhost:3000/api/v1/message/${idMsg}`,{headers:{authorization:`tariq__${token}`},params:{authorization:`tariq__${token}`}});
        swal("Poof! Your imaginary file has been deleted!", {
          
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
    // await axios.delete(`http://localhost:3000/api/v1/message/${idMsg}`,{headers:{authorization:`tariq__${token}`},params:{authorization:`tariq__${token}`}})
    // .then (()=> 
    // {console.log("The message was deleted")
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
  }
  return (
      <>
      <div className='d-flex flex-wrap align-items-center justify-content-center'>{
      messageList.map((message,id)=> { 
        return <div className="card text-center my-5  w-25 mx-4 " key={message._id}>
  <div className="card-header bg-color">
    Message {id+1}
  </div>
  <div className="card-body">
    <p className="card-text msg-content">{message.text}</p>
    <button type="button" className="btn btn-danger" onClick={()=>deleteMsg(message._id)}>Delete</button>
  </div>
  <div className="card-footer text-muted ">
  {message.createdAt}
  </div>


      </div>})
          
      }</div>
      
      {/* <table className="table w-75 " >
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
             <td><button type="button" className="btn btn-danger" onClick={()=>deleteMsg(message._id)}>Delete</button></td>
           </tr>)
          }
          </tbody>                   
        </table> */}
      </>
      
    
  )
}

export default ReceivedMessages