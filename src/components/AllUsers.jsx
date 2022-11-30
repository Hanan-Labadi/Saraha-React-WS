import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';

function AllUsers() {
    let [query , setQuery] = useState("");
    let [allUsers,setAllUsers]= useState([]);
    let navigate=useNavigate();
    async function getAllUsers(){
        let {data}=await axios.get("http://localhost:3000/api/v1/auth/allusers");
        setAllUsers(data.users);
        console.log(data.users)
       }
       function sendToProfile(id){
        navigate({
          pathname:`/sendmessage`,
          search:`?id=${id}`,
        })
       }

       useEffect(()=>{
        getAllUsers();
       },[])
       
  return (
    <>
    <div className="d-flex flex-column align-items-center ">

        <div className="input-group  search d-flex align-items-st">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1"> Search for Someone</span>
          </div>
          <input type="text" onChange={e=>setQuery(e.target.value)}   className="form-control"  placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"  />
        </div>
        <table className="table w-50 ">
            <thead>
                <tr>
                    <th className='text-center' scope="col">Name</th>
                </tr>
            </thead>
            
                    {
                        allUsers.filter(user=>user.userName.toLowerCase().includes(query)).map((user,id)=>
                        <tbody>
                        <td className='w-50 text-center'> {user.userName}</td>
                        <td className='w-50' key={user._id} onClick={()=> sendToProfile( user._id )}><button type="button" class="btn btn-info w-50">Send a Message</button></td>
                        </tbody>
                        )
                    }
        </table>
    </div>

    </>
  )
}

export default AllUsers