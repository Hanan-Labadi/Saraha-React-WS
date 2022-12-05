import React, { useState } from 'react'
import Avatar from "../img/avatar.png";
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
function SendMessage({allUsers}) {

  
  let [searchParams, setSearchParams]= useSearchParams();
  let [text,setText]= useState('');
  let userId=searchParams.get('id');
   let targetID;
   let userNAme;
  allUsers.filter((ele)=>{
    if(ele._id===userId){
      targetID=ele._id;
      userNAme=ele.userName;
    }
  });

   let sendMsg =async (e)=>{
    e.preventDefault();
      let {data} =await axios.post(`http://localhost:3000/api/v1/message/${targetID}`, {text:text});
        swal({
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success",
          button: "DONE!",
        });
      
      
  }
  
  function handelText(e){
    setText(e.target.value);
   
  }
  return (
<div>
  <div className="container text-center py-5 my-5 text-center">
    <div className="card py-5 mb-5">
      <a  data-toggle="modal" data-target="#profile">
        <img src={Avatar} className="avatar " alt="avatar" />
      </a>
      <h3 className="py-2">{userNAme}</h3>
      <div className="container w-50 m-auto">
        <form  method="post">
          <textarea onChange={(e)=>handelText(e)} className="form-control"  cols={10} rows={9} placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)" defaultValue={""} />
          <button  onClick={(e)=>sendMsg(e)}  className="btn btn-outline-info mt-3"><i className="far fa-paper-plane" /> Send</button>
        </form>
      </div>
    </div>
    <button data-toggle="modal" data-target="#share" className="btn btn-default-outline share "><i className="fas fa-share-alt" />  Share Profile</button>
  </div>
  <div className="modal fade" id="share" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Share Profile</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>host/messages/id</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default SendMessage
