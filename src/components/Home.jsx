
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

function Home() {
 
  let navigate = useNavigate();
 function sendToProfile(name,id){
  navigate({
    pathname:`useraccount`,
    search:`?name=${name}`,
  })
 }

  let [allUsers,setAllUsers]= useState([]);
 async function getAllUsers(){
  let {data}=await axios.get("http://localhost:3000/api/v1/auth/allusers");
  setAllUsers(data.users);
 }

 useEffect(()=>{
  getAllUsers();
 },[])
 
let [query , setQuery] = useState("");
// console.log();
  return (
    <div className="container text-center my-5">
      <h4> Sarahah allows you to receive constructive feedback from your friends and co-workers </h4>
      <div className="buttons d-flex justify-content-center align-items-center  flex-column">
        <Link to="/login" className="btn btn-default-outline my-4">
          <i className="fas fa-user" /> Login
        </Link>
        <Link to="/register" className="btn btn-default-outline">
          <i className="far fa-edit" /> Register
        </Link>

        <div className="input-group mb-3 search">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">@</span>
          </div>
          <input type="text" onChange={e=>setQuery(e.target.value)}   className="form-control"  placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  />
        </div>
        {
           allUsers.filter(user=>user.userName.toLowerCase().includes(query)).map((user,id)=>
          // <Link  to="profile">  </Link>
          <p key={user._id} onClick={()=> sendToProfile( user.userName , user._id )}>{user.userName}</p>
          )
        }
      </div>
    </div>

  );
}

export default Home;
