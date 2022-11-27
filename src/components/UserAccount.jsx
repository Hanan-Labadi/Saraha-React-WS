import React, { useState } from 'react'
import Avatar from "../img/avatar.png";
import { useSearchParams } from 'react-router-dom';

export default function UserAccount({allUsers}) {

  let [searchParams,setSearchParams] = useSearchParams();
   let firstName=searchParams.get('name');
   
  console.log(allUsers);
 
  
  return (


<div>

  
  <div className="container text-center py-5 my-5 text-center">
    <div className="card py-5 mb-5">
      <a  data-toggle="modal" data-target="#profile">
        <img src={Avatar} className="avatar " alt="avatar" />
      </a>
      <h3 className="py-2">{firstName}</h3>
      <div className="container w-50 m-auto">
        <form  method="post">
          <textarea className="form-control"  cols={10} rows={9} placeholder="You cannot send a Sarahah to yourself, share your profile with your friends :)" defaultValue={""} />
          <button className="btn btn-outline-info mt-3"><i className="far fa-paper-plane" /> Send</button>
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
